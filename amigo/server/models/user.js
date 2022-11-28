const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.User.hasMany(db.Item, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : Item(N)

    db.User.hasMany(db.Money, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : money(N)
    
    db.User.hasMany(db.Donation_item_comment, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : comment(N)
    db.User.hasMany(db.Donation_money_comment, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : comment(N)
    db.User.hasMany(db.Question, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : quesion(N)
    db.User.hasMany(db.Notice, { foreignKey: 'UserId', sourceKey: 'idx'}); // User(1) : notice(N)

    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
  }
};