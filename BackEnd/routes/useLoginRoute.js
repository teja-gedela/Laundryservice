const router = require('express').Router();
const User = require('../model/userModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
router.use(bodyParser.json())

