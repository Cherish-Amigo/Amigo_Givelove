const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const DonationMoney = require("../../models/money/donation_money");
const DonationMoneyCategory = require("../../models/money/donation_money_category");

const router = express.Router();

// 전체 donationMoney 찾기

// router.get('/select', (req, res, next) => {
//   Donation_money.findAll({})
//     .then((money) => {
//       console.log(money);
//       res.json(money);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

// 특정 donationMoney 찾기

router.get("/select/:userId/:moneyId", (req, res, next) => {
  const userId = req.params.userId;
  const moneyId = req.params.moneyId;

  Donation_money.findAll({
    where: { userId: userId, donation_moneyId: moneyId },
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
    });
});

router.post("/register", isNotLoggedIn, async (req, res, next) => {
  const {
    teamId,
    name,
    donationType,
    donationDescription,
    minimumContributionAmount,
    nameBank,
    bankAccountNumber,
    accountHolder,
    category,
    firstImage,
    secondImage,
    thirdImage,
  } = req.body;
  try {
    console.log(category);

    const result = await DonationMoney.create({
      TeamId: teamId,
      name,
      donationType,
      donationDescription,
      minimumContributionAmount,
      nameBank,
      bankAccountNumber,
      accountHolder,
      firstImage,
      secondImage,
      thirdImage,
    });

    const categories = category.split(",");

    console.log(categories);

    for (const category of categories) {
      await DonationMoneyCategory.create({
        category: category,
        Donation_moneyId: result.idx,
      });
    }

    return res.json({
      status: 200,
      message: "기부금안내등록 성공",
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.put("/update/:id", async (req, res, next) => {
  const {
    donationDescription,
    minimumContributionAmount,
    nameBank,
    bankAccountNumber,
    accountHolder,
    category,
    firstImage,
    secondImage,
    thirdImage,
  } = req.body;
  try {
    await DonationMoney.update(
      {
        donationDescription,
        minimumContributionAmount,
        nameBank,
        bankAccountNumber,
        accountHolder,
        firstImage,
        secondImage,
        thirdImage,
      },
      {
        where: { idx: req.params.id },
      }
    );
    return res.json({
      status: 200,
      message: "기부금안내수정 성공",
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      message: error,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  await DonationMoney.destroy({ where: { idx: req.params.id } });
  res.json({
    status: 200,
    message: "기부금안내제거 성공",
  });
});

module.exports = router;
