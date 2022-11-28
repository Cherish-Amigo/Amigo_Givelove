const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const Item = require('../../models/item/item');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const { UserId, Donation_itemId, donatename, birthday, phonenumber, listItems, address, address2 } = req.body;
    try {
      await Item.create({
        UserId, 
        Donation_itemId, 
        donorName : donatename,
        dateBirth : birthday,
        phoneNumber : phonenumber,
        listItems : "3세 여아옷",
        address : address
      });

      return res.json({ 
        status: 200,
        message: "물품등록 성공",
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
    const { name, explanation } = req.body;
  try {
    await Item.update({
        name, 
        explanation,
    }, {
      where: { Donation_itemId : req.params.id },
    });

    return res.json({ 
      status: 200,
      message: "물품수정 성공",
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

    res.json({ 
      status: 200,
      message: "물품제거 성공",
    });
});

module.exports = router;