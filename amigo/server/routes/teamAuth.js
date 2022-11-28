const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Team = require('../models/team');
const User = require('../models/user');
const router = express.Router();

// Team Join Check

router.post('/check', isNotLoggedIn, async (req, res, next) => {
    
  const { id } = req.body;

  try {
    const exTeam = await Team.findOne({ where: { id } });

    if (!exTeam) { 
      res.json({ 
        status: 201,  
        message: 'id 사용 가능',
      });
    }else{
      return res.json({ 
        status: 401,
        message: "id 사용 불가능 ( id 중복 )",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ 
      status: 500,  
      message: error,
    });
  }
});

// Team Join Router

router.post('/join', isNotLoggedIn, async (req, res, next) => {

  const { id, password, kname, ename, number, address, address2, name, businessnum } = req.body;
  
  try {
    const exTeam = await Team.findOne({ where: { id } });
    const exUser = await User.findOne({ where: { id } });

      if (exTeam != null || exUser != null) { 
        return res.json({ 
          status: 401,
          message: "회원 가입 실패 (id 중복)",
        });
      }

    const hash = await bcrypt.hash(password, 12);
    await Team.create({
      id : id,
      password : hash,
      companyKoreanName : kname,
      companyEnglishName : ename,
      phoneNumber : number,
      address : address,
      detailAddress : address2,
      representativeName : name,
      businessLicenseNumber : businessnum,
    });

    res.json({ 
      statusCode: 202,  
      message: '회원 가입 성공'
    });
  } catch (error) {
    console.error(error);
    res.json({ 
      statusCode: 500,  
      message: '회원 가입 실패'
    });
  }
});

// Team Login Router

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('team', (authError, team, info) => {

    console.log(team);

    if (authError) {
      console.log("error point 1");
      console.error(authError);
      return next(authError);
    }
    if (!team) {
      return res.json({
        statusCode: 402,
        message: info.message,
      });
    }
    return req.login(team, (loginError) => {
      if (loginError) {
        console.log("error point 2");
        console.error(loginError);
        return next(loginError);
      }
      
      return res.json({
        type: "Team",
        statusCode: 203, 
        data: req.user,
        message: '로그인 성공',
      });
    });
  })(req, res, next);
});

// Team Logout Router

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.json({
      statusCode: 204,
      message: "로그아웃 성공",
    });
});

module.exports = router;