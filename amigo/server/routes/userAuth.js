  const express = require('express');
  const passport = require('passport');
  const bcrypt = require('bcrypt');
  const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
  const User = require('../models/user');
  const Team = require('../models/team');
  const router = express.Router();

  // User Join Check

  router.post('/check', isNotLoggedIn, async (req, res, next) => {
    
    const { id } = req.body;

    try {
      const exUser = await User.findOne({ where: { id } });

      if (!exUser) { 
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

  // User Join Router

  // Not Login

  router.post('/join', isNotLoggedIn, async (req, res, next) => {
    
    const { id, password, name, number } = req.body;

    try {
      const exUser = await User.findOne({ where: { id } });
      const exTeam = await Team.findOne({ where: { id } });

      console.log(exUser);
      console.log(exTeam);

      if (exUser != null || exTeam != null) { 
        return res.json({ 
          status: 401,
          message: "회원 가입 실패 (id 중복)",
        });
      }

      const hash = await bcrypt.hash(password, 12);

      await User.create({
        id : id, 
        password : hash,
        name : name, 
        phoneNumber : number,
      });

      res.json({ 
        status: 202,  
        message: '회원 가입 성공',
      });

    } catch (error) {
      console.error(error);
      res.json({ 
        status: 500,  
        message: error,
      });
    }
  });

  // User Login Router

  router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('user', (authError, user, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        return res.json({
          status: 402,
          message: info.message,
        });
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.json({
          type: "User",
          status: 203, 
          data: req.user,
          message: '로그인 성공',
        });
      });
    })(req, res, next);
  });

  // User Logout Router

  router.get('/logout', isLoggedIn, (req, res) => {
      req.logout();
      req.session.destroy();
      res.json({
        status: 204,
        message: "회원 로그아웃 성공",
      });
  });

  module.exports = router;