const express = require("express");
const router = express.Router();
const WGModel = require("../models/WG");
const userModel = require('../models/User')
const { Op } = require("sequelize");
const { nanoid } = require('nanoid')
const { getRandomValues } = require('crypto').webcrypto
var jwt = require('jsonwebtoken');
const WGRoomModel = require("../models/WGRoom");


/* 
    1. Check if there any data missing
    2. Check if this user has any other WGs ToDo: Check with team if a user can be admin for different WGs
    3. Save data in the database
 */
router.post('/', async function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.body.name) {
        isDataMissing = true;
        missingFields.push('name');
    }

    if (!request.body.totalRoomsNumber) {
        isDataMissing = true;
        missingFields.push('totalRoomsNumber');
    }

    if (!request.body.rooms || request.body.rooms.length === 0) {
        isDataMissing = true;
        missingFields.push('rooms');
    }



    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't create WG, missing data " + missingFields.join(', '),
        });

        return;
    }

    const token = request.headers.authorization.split(' ')[1]
    console.log(request.header)
    const secret = "VERY TOP SECRET!!!";
    console.log(`Token is ${token}`);
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const user = await userModel.findOne({
        where: {
            id: userID
        },
    });

    // const wgCode = await nanoid(12); // generate secure random string https://github.com/ai/nanoid
    var array = new Uint32Array(1);
    getRandomValues(array);
    const wgCode = '' + array[0];

    const newWG = await WGModel.create({ name: request.body.name, code: wgCode, totalRoomsNumber: request.body.totalRoomsNumber });
    await newWG.setAdmin(user);
    await newWG.addMember(user);
    await request.body.rooms.map(async (room) => {
        const wgRoom = await WGRoomModel.create({ name: room });
        wgRoom.setWG(newWG);
    });

    console.log(`WG ${newWG.name} was saved to the database!`);

    response.json({
        success: true,
        message: `WG ${newWG.name} created successfully!`,
        data: {
            id: newWG.id,
            code: newWG.code
        }
    })


});

/* 
    1. Check if wg id in the url is connected to an actual wg in the databae
    2. Send WG data
 */
router.get('/:id', async function (request, response) {


    const wg = await WGModel.findOne({
        where: {
            id: request.params.id
        }
    });

    if (wg === null) {
        response.json({
            success: false,
            message: "The sent WG id is not connected to any records in the database."
        });

        return;
    }

    const wgAdmin = await wg.getAdmin();
    const wgRooms = await wg.getRooms();
    response.json({
        sucesss: true,
        message: "WG data found!",
        data: {
            id: wg.id,
            name: wg.name,
            code: wg.code,
            admin: wgAdmin,
            totalRoomsNumber: wg.totalRoomsNumber,
            Rooms: wgRooms,
        }
    });

});

/* 
    1. Check if token exists in header
    2. Check if WG id connects to an actual wg record in db
    3. Check if user is already in WG
    4. Add user to wg members
    5. Send response
 */
router.post('/join', async function (request, response) {
    if (!request.headers.authorization) {
        response.json({
            success: false,
            message: "Missing request header authorization token."
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            code: request.body.code
        }
    });

    if (wg === null) {
        response.json({
            success: false,
            message: "The sent WG code is not connected to any records in the database."
        });

        return;
    }

    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const wgMembmers = await wg.getMembers();
    var user = wgMembmers.find(user => user.id === userID)


    if (user) {
        response.json({
            success: false,
            message: "User has already joined this WG."
        });

        return;
    }

    user = await userModel.findOne({
        where: {
            id: userID
        }
    });
    console.log("User data: ")

    console.log(user)
    await wg.addMember(user);


    response.json({
        success: true,
        message: "User has been added to this WG successfully."
    });

});

/* 
    1. Check token in the request
    2. Check the WG code exists
    3. Extract the user id from the token and check if there is a user with this token
    4. Check if user is in this WG
    5. Collect data and send it
 */
router.get('/:id/dashboard', async function (request, response) {
    if (!request.headers.authorization) {
        response.json({
            success: false,
            message: "Missing request header authorization token."
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            id: request.params.id
        }
    });

    if (wg === null) {
        response.json({
            success: false,
            message: "The sent WG ide is not connected to any records in the database."
        });

        return;
    }

    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const wgMembmers = await wg.getMembers();
    var user = wgMembmers.find(user => user.id === userID)

    if (!user) {
        response.json({
            success: false,
            message: "User is not authorized to view this WG."
        });

        return;
    }
    const wgTasks = await wg.getTasks();
    const nextTask = wgTasks.find(task => task.isDone === false);
    const membersSpendings = [];
    for (member of wgMembmers) {
        let memberSpending = 0;
        const wgPurchases = await wg.getPurchases();
        const memberPurchases = wgPurchases.filter(purchase => purchase.UserId === member.id && purchase.isSettled === false);
        memberPurchases.map(purchase => memberSpending += purchase.totalCost);
        membersSpendings.push({userName: member.name, spending: memberSpending});
    }
    response.json({
        success: true,
        message: "WG dashboard retreieved successfully",
        data: {
            userName: user.name,
            wg: wg,
            nextTask: nextTask? nextTask: null,
            membersSpendingsSummary: membersSpendings, 
        }
    })


})

module.exports = router;