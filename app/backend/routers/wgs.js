const express = require("express");
const router = express.Router();
const WGModel = require("../models/WG");
const userModel = require('../models/User')
const { Op } = require("sequelize");
const {nanoid} = require('nanoid')

/* 
    1. Check if there any data missing
    2. Check if this user has any other WGs ToDo: Check with team if a user can be admin for different WGs
    3. Save data in the database
 */
router.post('/', function (req, res) {
    var isDataMissing = false;
    var missingFields = [];
    if (!req.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!req.body.wgName) {
        isDataMissing = true;
        missingFields.push('wgName');
    }

    if (!req.body.totalRoomsNumber) {
        isDataMissing = true;
        missingFields.push('totalRoomsNumber');
    }

    if (!req.body.rooms || req.body.rooms.length === 0) {
        isDataMissing = true;
        missingFields.push('rooms');
    }

    if (!req.body.contactNumber) {
        isDataMissing = true;
        missingFields.push('contactNumber');
    }

    if (isDataMissing) {
        res.json({
            success: false,
            message: "Can't create WG, missing data " + missingFields.join(', '),
        });

        return ;
    }

    const token = req.headers.authorization
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const user = await userModel.findOne({
        where: {
            id: userID
        },
    });

    //const wgCode = await nanoid(12); // generate secure random string https://github.com/ai/nanoid
    
    const newWG = await WGModel.create({name: req.body.name, totalRoomsNumber: req.body.contactNumber, admin: user});
    console.log(`WG ${newWG.name} was saved to the database!`);

    res.json({
        success: true,
        message: `WG ${newWG.name} created successfully!`,
        data : {
            wgID: newWG.id
        }
    })


});

module.exports = router;