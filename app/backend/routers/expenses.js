const express = require("express");
const router = express.Router();
const WGModel = require("../models/WG");
const userModel = require('../models/User')

//ToDo: Should the input sent as a query string or in the request body
/* 
    1. Check if missing data
    2. Find WG with wg id
    3. Check if user is authorized to view this data
    4. Find expenses with search parameters
    5. Send purchases in the found expense
 */
router.get('/expenses', function(request, response) {
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

    if (!request.body.month) {
        isDataMissing = true;
        missingFields.push('month');
    }

    if (!request.body.year) {
        isDataMissing = true;
        missingFields.push('month');
    }

    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't seach for expenses, missing data " + missingFields.join(', '),
        });

        return;
    }

    const wg = await WGModel.findOne({
        where: {
            id: request.body.id
        }
    });

    const user = wg.members.filter(user => user.id === userID)

    if (!user) {
        response.json({
            success: false,
            message: "User is not authorized to view this WG."
        });

        return;
    }


    const expenses = await expensesModel.findOne({
        where: {
            wgID: request.body.id,
            month: request.body.month,
            year: request.body.year,
        }
    })


    
})