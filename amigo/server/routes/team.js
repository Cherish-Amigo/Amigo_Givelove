const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Team = require('../models/team');

const router = express.Router();

router.put('/update/:id', async (req, res, next) => {
  const { password, kname, ename, number, address, address2, name, businessnum } = req.body;

  try {
    const hash = await bcrypt.hash(password, 12);
    await Team.update({
        password : hash,
        companyKoreanName : kname,
        companyEnglishName : ename,
        phoneNumber : number,
        address : address,
        detailAddress : address2,
        representativeName : name,
        businessLicenseNumber : businessnum
    }, {
      where: { id : req.params.id },
    });
    console.log("팀 수정 성공");
    return res.json({
      statusCode: 200, 
      message: '팀 수정 성공',
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
//   console.log(req.params.id);
  await Team.destroy({ where: { id : req.params.id } });
    console.log("팀 탈퇴 성공");
    return res.json({
      statusCode: 200, 
      message: '팀 탈퇴 성공',
    });
});

// 전체 user 찾기

// router.get('/select', (req, res, next) => {
//   Team.findAll({})
//     .then((team) => {
//       console.log(team);
//       res.json(team);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

// 특정 user 찾기

// router.get('/select/:id', (req, res, next) => {
//   Team.find({
//     where: { id: req.params.id }
//   })
//     .then((team) => {
//       console.log(team);
//       res.json(team);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

module.exports = router;