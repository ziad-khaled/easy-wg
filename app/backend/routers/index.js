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
router.post('/signup', async (req, res, next) => {
    var isDataMissing = false;
    var missingFields = [];
    if (!req.body.name) {
        isDataMissing = true;
        missingFields.push('name');
    }

    if (!req.body.email) {
        isDataMissing = true;
        missingFields.push('email');
    }

    if (!req.body.password) {
        isDataMissing = true;
        missingFields.push('password');
    }

    if (!req.body.contactNumber) {
        isDataMissing = true;
        missingFields.push('contactNumber');
    }

    if (isDataMissing)
        res.json({
            success: false,
            message: "Can't create account, missing data " + missingFields.join(', '),
        });
    else {
        const user = await userModel.findOne({
            where: {
                [Op.or]: [{
                    email: req.body.email
                }, {
                    contactNumber: req.body.contactNumber
                }]
            },
        });

        if (user)
            res.json({
                success: false,
                message: "A user has already signed up using this email or contact number.",
            });
        else {
            const saltRounds = 10;
            await bcrypt.hash(req.body.password, saltRounds).then(async (hash) => {
                const newUser = userModel.build({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    contactNumber: req.body.contactNumber
                });
                await newuserModel.save();
                console.log(`User ${req.body.name} ${req.body.email} has been created.`);
            });


            res.json({
                success: true,
                message: "Account created successfully, " + req.body.name,
            });
        }
    }
})

router.get('/login', async (req, res, next) => {
    const user = await userModel.findOne({
        where: {
            email: req.body.email,
        },
    });


    if (user) {
        const payload = {
            id: user.id,
            email: user.email,
        };
        const plainTextPassword = req.body.password;

        const isPasswordCorrect = await bcrypt.compare(
            plainTextPassword,
            user.password
        );

        if (isPasswordCorrect) {
            const secret = "VERY TOP SECRET!!!";
            const jwtToken = jwt.sign(payload, secret);

            res.json({
                success: true,
                message: "User logged in successfully!",
                data: {
                    jwtToken: jwtToken,
                },
            });
        }

    } else
        res.json({
            success: false,
            message: "Wrong credentials, please check your email or password.",
        });
});


module.exports = router;