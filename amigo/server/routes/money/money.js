const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const Money = require('../../models/money/money');

const router = express.Router();

// 전체 money 찾기

// router.get('/select', (req, res, next) => {
//   Money.findAll({})
//     .then((money) => {
//       console.log(money);
//       res.json(money);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

// 특정 money 찾기

router.get('/select/:userId/:moneyId', (req, res, next) => {

  const userId = req.params.userId;
  const moneyId = req.params.moneyId;

  Money.findAll({
      where: { userId: userId, donation_moneyId: moneyId }
  })
    .then((money) => {
      console.log(money);
      res.json(money);
    })
    .catch((error) => {
      console.error(error);
      res.json({ 
        status: 500,  
        message: error,
      });
    })
});

router.post('/register', async (req, res, next) => {
    const { UserId, Donation_moneyId, donatename, birthday, phonenumber, money, bank, banknumber, othername, Otherbirthday, } = req.body;
    try {
      await Money.create({
        UserId, 
        Donation_moneyId, 
        donorName : donatename,
        dateBirth : birthday,
        phoneNumber : phonenumber,
        aidAmount : money,
        nameBank : bank,
        bankAccountNumber : banknumber,
        accountHolderName : othername,
        accountHolderDateBirth : Otherbirthday,
      });
      console.log("기부금등록 성공");
      return res.json({ 
        status: 200,
        message: "기부금등록 성공",
      });
    } catch (error) {
      console.error(error);
      res.json({ 
        status: 500,  
        message: error,
      });
    }
  });

router.put('/update/:id', async (req, res, next) => {
    const { money } = req.body;
  try {
    await Money.update({
        money,
    }, {
      where: { Donation_moneyId : req.params.id },
    });
    console.log("기부금수정 성공")
    return res.json({ 
      status: 200,
      message: "기부금수정 성공",
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
  await Money.destroy({ where: { Donation_moneyId : req.params.id } });
    console.log("기부금제거 성공")
    res.json({ 
      status: 200,
      message: "기부금제거 성공",
    });
});

module.exports = router;