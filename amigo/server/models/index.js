const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

// character 관련

const User = require('./user');
const Team = require('./team');

// item 관련

const Item = require('./item/item');

const Item_image = require('./item/item_image');

const Donation_item = require('./item/donation_item');
const Donation_item_image = require('./item/donation_item_image');
const Donation_item_comment = require('./item/donation_item_comment');
const Donation_item_category = require('./item/donation_item_category');
const Donation_item_list = require('./item/donation_item_list');

// money 관련
const Money = require('./money/money');

const Donation_money = require('./money/donation_money');
const Donation_money_category = require('./money/donation_money_category');
const Donation_money_comment = require('./money/donation_money_comment');
const Donation_money_image = require('./money/donation_money_image');

// 기타
const Question = require('./question');
const Notice = require('./notice');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Team = Team;

db.Item = Item;
db.Item_image = Item_image;
db.Donation_item = Donation_item;
db.Donation_item_image = Donation_item_image;
db.Donation_item_comment = Donation_item_comment;
db.Donation_item_category = Donation_item_category;
db.Donation_item_list = Donation_item_list;

db.Money = Money;
db.Donation_money = Donation_money;
db.Donation_money_category = Donation_money_category;
db.Donation_money_comment = Donation_money_comment;
db.Donation_money_image = Donation_money_image;

db.Question = Question;
db.Notice = Notice;

db.Mainviews = require('./mainview');

User.init(sequelize);
Team.init(sequelize);
Item.init(sequelize);
Item_image.init(sequelize);
Donation_item.init(sequelize);
Donation_item_image.init(sequelize);
Donation_item_comment.init(sequelize);
Donation_item_category.init(sequelize);
Donation_item_list.init(sequelize);

Money.init(sequelize);
Donation_money.init(sequelize);
Donation_money_category.init(sequelize);
Donation_money_comment.init(sequelize);
Donation_money_image.init(sequelize);

Question.init(sequelize);
Notice.init(sequelize);

User.associate(db);
Team.associate(db);
Item.associate(db);
Item_image.associate(db);
Donation_item.associate(db);
Donation_item_image.associate(db);
Donation_item_comment.associate(db);
Donation_item_category.associate(db);
Donation_item_list.associate(db);

Money.associate(db);
Donation_money.associate(db);
Donation_money_category.associate(db);
Donation_money_comment.associate(db);
Donation_money_image.associate(db);

Question.associate(db);
Notice.associate(db);

module.exports = db;