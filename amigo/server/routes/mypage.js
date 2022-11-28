const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');
const Team = require('../models/team');

const router = express.Router();

// user 정보 요청

router.post('/user', isLoggedIn, async (req, res, next) => {
    
    const id = req.user.id;
    const password = req.user.password;

    try {
        const result =  await User.findOne({
            where: {
                id: id,
                password: password,
            }
        });
    
        return res.json(result);
    } catch (error) {
        console.error(error);
        res.json({ 
          status: 500,  
          message: error,
        });
    }
});

// team 정보 요청

// isLoggedIn

router.post('/team', isLoggedIn, async (req, res, next) => {

    const id = req.user.id;
    const password = req.user.password;

    try {
        const result =  await Team.findOne({
            where: {
                id: id,
                password: password,
            }
        });
    
        return res.json(result);
    } catch (error) {
        console.error(error);
        res.json({ 
          status: 500,  
          message: error,
        });
    }
});

module.exports = router;