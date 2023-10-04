const router = require('express').Router();
const User = require('../model/userModel');
const mongoose=require('mongoose')
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// const { route } = require('../app');
router.use(bodyParser.json())
router.post("/register",async (req, res) => {
    try {
       const { name, email, password, phone, district, pincode, state, address } = req.body
    //   console.log({ name, email, password, phone, district, pincode, state, address } )
    // const {name,password,email}=req.body
    const isUser = await User.findOne({ email: email })
    // console.log("king ravi")
    if (isUser) {
        return res.status(403).send("User Already Exists With Given Email or PhoneNo.")
    }
    else {
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                return res.status(400).json({
                    "Error": err.message
                })
            } else {const user = new User({
                name: name,
                email: email,
                password: hash,
                phone: phone,
                district: district,
                pincode: pincode,
                state: state,
                address: address
            });
            user.save().then(() => {
                return res.status(200).json({
                    "user": user,
                })
            })}})}}
    
            catch (e) {
                // console.log("king ravi")
                return res.status(400).json({
                    "Message": e.message
                });
            }
})
module.exports=router
