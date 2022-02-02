const express = require("express");
const router = express.Router();
const WGModel = require("../models/WG");
const userModel = require('../models/User')
const { Op } = require("sequelize");
const { nanoid } = require('nanoid')

/* 
    1. Check if there any data missing
    2. Check if this user has any other WGs ToDo: Check with team if a user can be admin for different WGs
    3. Save data in the database
 */
router.post('/', function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.body.wgName) {
        isDataMissing = true;
        missingFields.push('wgName');
    }

    if (!request.body.totalRoomsNumber) {
        isDataMissing = true;
        missingFields.push('totalRoomsNumber');
    }

    if (!request.body.rooms || request.body.rooms.length === 0) {
        isDataMissing = true;
        missingFields.push('rooms');
    }

    if (!request.body.contactNumber) {
        isDataMissing = true;
        missingFields.push('contactNumber');
    }

    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't create WG, missing data " + missingFields.join(', '),
        });

        return;
    }

    const token = request.headers.authorization
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const user = await userModel.findOne({
        where: {
            id: userID
        },
    });

    //const wgCode = await nanoid(12); // generate secure random string https://github.com/ai/nanoid

    const newWG = await WGModel.create({ name: request.body.name, totalRoomsNumber: request.body.contactNumber, admin: user });
    console.log(`WG ${newWG.name} was saved to the database!`);

    response.json({
        success: true,
        message: `WG ${newWG.name} created successfully!`,
        data: {
            wgID: newWG.id
        }
    })


});

/* 
    1. Check if the there is a valid token sent with the request
    2. Check if wg id in the url is connected to an actual wg in the databae
    3. Send WG data
 */
router.get('/:id', async function (request, response) {
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
            message: "The sent WG id is not connected to any records in the database."
        });

        return;
    }

    response.json({
        sucesss: true,
        message: "WG data found!",
        data: {
            id: wg.id,
            name: wg.name,
            code: wg.code,
            totalRoomsNumber: wg.totalRoomsNumber,
            Rooms: wg.rooms.map((room) => room.name),
        }
    });

});

/* 
    1. Check if token exists in header
    2. Check if WG codes connects to an actual wg record in db
    3. Check if user is already in WG
    4. Add user to wg members
    5. Send response
 */
router.post('/:code/members', async function (request, response) {
    if (!request.headers.authorization) {
        response.json({
            success: false,
            message: "Missing request header authorization token."
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            code: request.params.code
        }
    });

    if (wg === null) {
        response.json({
            success: false,
            message: "The sent WG code is not connected to any records in the database."
        });

        return;
    }

    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    var user = wg.members.filter(user => user.id === userID)

    if (user) {
        response.json({
            success: false,
            message: "User has already joined this WG."
        });

        return;
    }

    user = wg.findOne({
        where: {
            id: userID
        }
    });

    user.currentWG.create({ userID: userID });
    response.json({
        success: false,
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
router.get('/:code/dashboard', async function (request, response) {
    if (!request.headers.authorization) {
        response.json({
            success: false,
            message: "Missing request header authorization token."
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            code: request.params.code
        }
    });

    if (wg === null) {
        response.json({
            success: false,
            message: "The sent WG code is not connected to any records in the database."
        });

        return;
    }

    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    var user = wg.members.filter(user => user.id === userID)

    if (!user) {
        response.json({
            success: false,
            message: "User is not authorized to view this WG."
        });

        return;
    }

    response.json({
        success: true,
        message: "WG dashboard retreieved successfully",
        data: {
            userName: user.name,
            members_spendings_summary: wg.members.map((user) => {
                return ({
                    memberName: user.name,
                        speding: user.speding
                });
            })
        }
    })


})

module.exports = router;