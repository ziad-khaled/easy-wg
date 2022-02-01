const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const userModel = require("../models/User");
const WGModel = require("../models/WG");
const associations = require('../models/associations')
const { Op } = require("sequelize");

/*
    1. Check if there is any missing data fields
    2. Check if user already exists
    3. Create user if doesn't exist
    4. send response
 */
router.post('/signup', async function(request, response) {
    var isDataMissing = false;
    var missingFields = [];
    if (!request.body.name) {
        isDataMissing = true;
        missingFields.push('name');
    }

    if (!request.body.email) {
        isDataMissing = true;
        missingFields.push('email');
    }

    if (!request.body.password) {
        isDataMissing = true;
        missingFields.push('password');
    }

    if (!request.body.contactNumber) {
        isDataMissing = true;
        missingFields.push('contactNumber');
    }

    if (isDataMissing)
        response.json({
            success: false,
            message: "Can't create account, missing data " + missingFields.join(', '),
        });
    else {
        const user = await userModel.findOne({
            where: {
                [Op.or]: [{
                    email: request.body.email
                }, {
                    contactNumber: request.body.contactNumber
                }]
            },
        });

        if (user)
            response.json({
                success: false,
                message: "A user has already signed up using this email or contact number.",
            });
        else {
            const saltRounds = 10;
            await bcrypt.hash(request.body.password, saltRounds).then(async (hash) => {
                const newUser = userModel.build({
                    name: request.body.name,
                    email: request.body.email,
                    password: hash,
                    contactNumber: request.body.contactNumber
                });
                await newUser.save();
                console.log(`User ${request.body.name} ${request.body.email} has been created.`);
            });


            response.json({
                success: true,
                message: "Account created successfully, " + request.body.name,
            });
        }
    }
})

router.get('/login', async function(request, response)  {
    const user = await userModel.findOne({
        where: {
            email: request.body.email,
        },
    });


    if (user) {
        const payload = {
            id: user.id,
            email: user.email,
        };
        const plainTextPassword = request.body.password;

        const isPasswordCorrect = await bcrypt.compare(
            plainTextPassword,
            user.password
        );

        if (isPasswordCorrect) {
            const secret = "VERY TOP SECRET!!!";
            const jwtToken = jwt.sign(payload, secret);

            response.json({
                success: true,
                message: "User logged in successfully!",
                data: {
                    jwtToken: jwtToken,
                },
            });
        }

    } else
        response.json({
            success: false,
            message: "Wrong credentials, please check your email or password.",
        });
});


module.exports = router;