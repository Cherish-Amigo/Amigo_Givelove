const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const DonationItem = require('../../models/item/donation_item');
const DonationItemCategory = require('../../models/item/donation_item_category');
const DonationItemList = require('../../models/item/donation_item_list');

const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
    const { teamId, name, donationType, donationDescription, listItems, address, donationCollectionMethod, category, firstImage, secondImage, thirdImage } = req.body;
    try {
      const result = await DonationItem.create({
        TeamId : teamId, 
        name : name,
        donationType,
        donationDescription,
        address,
        donationCollectionMethod,
        firstImage,
        secondImage,
        thirdImage
      });

      const items = listItems.split(',');

      console.log(items);

      for (const item of items) {
        await DonationItemList.create({
          articlesBeDonated : item,
          Donation_itemId : result.idx 
        });
      }

      const categories = category.split(',');

      console.log(categories);

      for (const category of categories) {
        await DonationItemCategory.create({
          category : category,
          Donation_itemId : result.idx 
        });
      }

      return res.json({ 
        status: 200,
        message: "물품안내등록 성공",
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
    await DonationItem.update({
      name, 
      explanation,
    }, {
      where: { idx : req.params.id },
    });

    return res.json({ 
      status: 200,
      message: "물품안내수정 성공",
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
  await DonationItem.destroy({ where: { idx : req.params.id } });

    res.json({ 
      status: 200,
      message: "기부금안내제거 성공",
    });
});

module.exports = router;