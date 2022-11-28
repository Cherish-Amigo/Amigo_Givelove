const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.put('/update/:id', async (req, res, next) => {
  const { password, name, number } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    await User.update({
      password : hash, 
      name : name,  
      phoneNumber : number,
    }, {
      where: { id : req.params.id },
    });
    return res.json({
      statusCode: 200, 
      message: '회원 수정 성공',
    });
  } catch (error) {
    console.error(error);
    res.json({ 
      status: 500,  
      message: error,
    });
  } 
});

router.delete('/delete/:id', async (req, res) => {
  await User.destroy({ where: { id : req.params.id } });
    return res.json({
      statusCode: 200, 
      message: '회원 탈퇴 성공',
    });
});

// 전체 user 찾기

// router.get('/select', (req, res, next) => {
//   User.findAll({})
//     .then((user) => {
//       console.log(user);
//       res.json(user);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

// 특정 user 찾기

// router.get('/select/:id', (req, res, next) => {
//   User.find({
//     where: { id: req.params.id }
//   })
//     .then((user) => {
//       console.log(user);
//       res.json(user);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

module.exports = router;