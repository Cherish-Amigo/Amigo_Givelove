const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const DonationItem = require('../models/item/donation_item');
const DonationItemList = require('../models/item/donation_item_list');
const DonationItemCategory = require('../models/item/donation_item_category');
const DonationMoney = require('../models/money/donation_money');
const DonationMoneyCategory = require('../models/money/donation_money_category');
const Money = require('../models/money/money');

const { QueryTypes } = require("sequelize"); 
const Sequelize = require("sequelize"); 
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const router = express.Router();

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
  );

// main page 요청

router.get('/main/:search/:category/:page', async (req, res, next) => {

    const search = req.params.search;
    const category = req.params.category;
    const page = req.params.page;

    let finddata = search;

    // console.log(search);
    // console.log(category);
    // console.log(page);

    try {
      if (category == "all"){
        sequelize.query(`CREATE OR REPLACE VIEW main AS SELECT idx, name, TeamId, donationType, createdAt FROM donation_moneys UNION ALL SELECT idx, name, TeamId, donationType, createdAt FROM donation_items`, { type: QueryTypes.CREATE });
      }else if (category == "money"){
        sequelize.query(`CREATE OR REPLACE VIEW main AS SELECT idx, name, TeamId, donationType, createdAt FROM donation_moneys`, { type: QueryTypes.CREATE });
      }else if (category == "item"){
        sequelize.query(`CREATE OR REPLACE VIEW main AS SELECT idx, name, TeamId, donationType, createdAt FROM donation_items`, { type: QueryTypes.CREATE });
      }else{
        res.json({ message : "category null"});
      }

      // 1 PAGE = 0 ~ 15 (16개)
      // 2 PAGE = 15 ~ 31 (16개)
      if (search == "all"){
        finddata = "";
      }

      // 1 page 부터 15개, 2 page 부터 15개 가져오는 query

      // const findview = `SELECT name, TeamId, category FROM main WHERE name LIKE "%${finddata}%" LIMIT ${(page-1)*15}, 15`;

      // 1 page 부터 15개. 1 page 부터 30개, 1 page 부터 45개 가져오는 query

      const countview = `SELECT count(*) as result FROM main`;

      const [count] = await sequelize.query(countview, { nest: true, type: QueryTypes.SELECT });
      
      // console.log(count.result);

      tempPage = (Number(page))*8

      // console.log(tempPage);

      const sum = count.result - (tempPage);

      let end = false;

      console.log(sum);

      if (sum < 0){
        end = true;
      }else{
        end = false;
      }

      const p = (Number(page)-1)*8;

      // Default 값은 최신 순으로 가져오기

      const findview = `SELECT idx, name, TeamId, donationType FROM main WHERE name LIKE "%${finddata}%" ORDER BY createdAt LIMIT ${p}, 8`;

      const data = await sequelize.query(findview, { type: QueryTypes.SELECT });

      console.log(data);

      res.json({
        status : 200,
        data : data,
        message : "성공적으로 조회되었습니다.",
        end : end
      });
    
    } catch (error) {
      console.log(error);
      res.json({
        status : 500,
        message : error
      });
    }
  });

// detail page 요청

router.get('/detail/:teamId/:name/:donationType', async (req, res, next) => {
  console.log("hi")

  const teamId = req.params.teamId;
  const name = req.params.name;
  const donationType = req.params.donationType;

  if (donationType == "money"){
    try {
      const result =  await DonationMoney.findOne({
        where: {
          name: name,
          teamId: teamId,
          donationType: donationType
        },
        include: {
          model: DonationMoneyCategory
        }
      });

      const sumMoney = sequelize.fn("sum", sequelize.col("aidAmount"));

      const sum =  await Money.findOne({
        attributes: [[sumMoney, 'aidAmount']],
        where: {
          Donation_moneyId: result.idx
        }
      });

      return res.json({result, sum});  
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }else if (donationType == "item"){
    try {
      const result =  await DonationItem.findOne({
        where: {
          name: name,
          teamId: teamId,
          donationType: donationType
        },
        include: [
          {
            model: DonationItemList,
          },
          {
            model: DonationItemCategory,
          }
        ]
      });
  
      return res.json(result);
    } catch (error) {
      console.error(error);
      res.json({ 
        status: 500,  
        message: error,
      });
    }
  }else {
    res.json({
      message: 'invalid category',
    });
  }
});

module.exports = router;