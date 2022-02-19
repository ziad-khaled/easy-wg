const express = require('express')
const router = express.Router();
const WGModel = require('../models/WG');
const userModel = require('../models/User');
const announcementModel = require('../models/Announcement')
const jwt = require('jsonwebtoken');


router.post('/', async function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.body.wgID) {
        isDataMissing = true;
        missingFields.push('wgID');
    }


    if (!request.body.message) {
        isDataMissing = true;
        missingFields.push('title');
    }


    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't add a new announcement, missing data " + missingFields.join(', '),
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            id: request.body.wgID
        }
    });

    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const wgMembers = await wg.getMembers();
    const user = wgMembers.find(user => user.id === userID);

    if (!user) {
        response.json({
            success: false,
            message: "User is not authorized to add announcements to this WG."
        });

        return;
    }

    const newAnnouncement = await announcementModel.create({ WGId: request.body.wgID, UserId: userID, message: request.body.message });

    response.json({
        success: true,
        message: "New announcement added successfully",
        data: {
            newAnnouncement: newAnnouncement
        }
    });
});

router.get('/', async function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.body.wgID) {
        isDataMissing = true;
        missingFields.push('wgID');
    }


    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't get WG announcements, missing data " + missingFields.join(', '),
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            id: request.body.wgID
        }
    });

    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const wgMembers = await wg.getMembers();
    const user = wgMembers.find(user => user.id === userID);

    if (!user) {
        response.json({
            success: false,
            message: "User is not authorized to view announcements of this WG."
        });

        return;
    }

    const announcements = await announcementModel.findAll({
        where: {
            WGId: request.body.wgID
        }, include: userModel
    });

    response.json({
        success: true,
        message: "WG announcements retrieved successfully.",
        data: {
            announcements: announcements
        }
    })
});


module.exports = router;