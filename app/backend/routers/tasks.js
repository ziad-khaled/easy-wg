const express = require('express')
const router = express.Router();
const WGModel = require('../models/WG');
const userModel = require('../models/User');
const taskModel = require('../models/Task')
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

    if (!request.body.deadline) {
        isDataMissing = true;
        missingFields.push('deadline');
    }

    if (!request.body.assignedUserID) {
        isDataMissing = true;
        missingFields.push('assignedUserID');
    }

    if (!request.body.title) {
        isDataMissing = true;
        missingFields.push('title');
    }



    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't add a new task, missing data " + missingFields.join(', '),
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
            message: "User is not authorized to add tasks to this WG."
        });

        return;
    }

    const newTask = await taskModel.create({ WGId: request.body.wgID, UserId: request.body.assignedUserID, deadline: request.body.deadline, title: request.body.title, comments: request.body.title });

    response.json({
        success: true,
        message: "New task added successfully",
        data: {
            newTask: newTask
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
            message: "Can't get WG tasks, missing data " + missingFields.join(', '),
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
            message: "User is not authorized to view tasks of this WG."
        });

        return;
    }

    const tasks = await taskModel.findAll({
        where: {
            WGId: request.body.wgID
        }, include: userModel
    });

    response.json({
        success: true,
        message: "WG tasks retrieved successfully.",
        data: {
            tasks: tasks
        }
    })
});

router.patch('/:id/done', async function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.params.id) {
        isDataMissing = true;
        missingFields.push('id');
    }



    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't update task, missing data " + missingFields.join(', '),
        });

        return;
    }

    const task = await taskModel.findOne({
        where: {
            id: request.params.id
        }
    });

    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;

    if (task.UserId !== userID) {
        response.json({
            success: false,
            message: "User is not authorized to mark this task as done."
        });

        return;
    }

    task.update({ isDone: true });

    response.json({
        success: true,
        message: "Task is marked as done."
    });


});
module.exports = router;