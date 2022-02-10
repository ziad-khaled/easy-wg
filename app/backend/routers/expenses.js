const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const WGModel = require("../models/WG");
const userModel = require('../models/User')
const purchaseModel = require('../models/Purchase')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/receipts')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })

/* 
    1. Check for missing data
    2. Check user authorization
    3. Save data to database and receipt image if it exists
 */
router.post('/purchases', upload.single('receiptImage'), async function (request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.headers.authorization) {
        isDataMissing = true;
        missingFields.push("request header authorization token");
    }

    if (!request.body.date) {
        isDataMissing = true;
        missingFields.push('date');
    }

    if (!request.body.wgID) {
        isDataMissing = true
    }

    if (!request.body.purchasedItems) {
        isDataMissing = true;
        missingFields.push('purchasedItems array');
    } else {
        if (!JSON.parse(request.body.purchasedItems[0]).productName) {
            isDataMissing = true;
            missingFields.push('purchasedItem.productName')
        }
        if (!JSON.parse(request.body.purchasedItems[0]).productPrice) {
            isDataMissing = true;
            missingFields.push('purchasedItem.productPrice')
        }
    }

    if (isDataMissing) {
        response.json({
            success: false,
            message: "Can't add for expenses, missing data " + missingFields.join(', '),
        });

        return;
    }



    const token = request.headers.authorization.split(' ')[1]
    const secret = "VERY TOP SECRET!!!";
    const decodedToken = jwt.verify(token, secret);
    const userID = decodedToken.id;
    const wg = await WGModel.findOne({
        where: {
            id: request.body.wgID
        }
    }); 

    const wgMembmers = await wg.getMembers();
    var user = wgMembmers.find(user => user.id === userID)
    if (!user) {
        response.json({
            success: false,
            message: "User is not member of this WG."
        });

        return;
    }

    var purchaseTotalCost = 0;
    for (purchasedItem of request.body.purchasedItems) {
        purchaseTotalCost += JSON.parse(purchasedItem).productPrice;
    }

    
    const purchase = await purchaseModel.create({ UserId: userID, WGId: request.body.wgID, date: request.body.date, totalCost: purchaseTotalCost, receiptPath: request.file.path});
    for (purchasedItem of request.body.purchasedItems)
        await purchase.createPurchasedItem({productName: JSON.parse(purchasedItem).productName, productPrice: JSON.parse(purchasedItem).productPrice, note: JSON.parse(purchasedItem).note? JSON.parse(purchasedItem).note : null})
  
    const purchasedItems = await purchase.getPurchasedItems();  
    response.json({
        success: true,
        message: "Purchase saved successfully.",
        data: {
            purchase: purchase,
            purchasedItems: purchasedItems
        }
    });
});


//ToDo: Should the input sent as a query string or in the request body
/* 
    1. Check if missing data
    2. Find WG with wg id
    3. Check if user is authorized to view this data
    4. Find expenses with search parameters
    5. Send purchases in the found expense
 */
/* router.get('/expenses', function(request, response) {
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


    
}) */

module.exports = router;