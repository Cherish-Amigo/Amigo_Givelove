const Sequelize = require('sequelize');

module.exports = class Donation_item extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      donationType: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      donationDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      donationCollectionMethod: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      firstImage: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      secondImage: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      thirdImage: {
        type: Sequelize.STRING(50),
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Donation_item',
      tableName: 'donation_items',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  } 
  static associate(db) {
    db.Donation_item.hasOne(db.Item, { foreignKey: 'Donation_itemId', sourceKey: 'idx'}); // Item(1) : Donation_item(1) 

    db.Donation_item.hasMany(db.Donation_item_image, { foreignKey: 'Donation_itemId', sourceKey: 'idx'});
    db.Donation_item.hasMany(db.Donation_item_comment, { foreignKey: 'Donation_itemId', sourceKey: 'idx'});
    db.Donation_item.hasMany(db.Donation_item_category, { foreignKey: 'Donation_itemId', sourceKey: 'idx'});

    db.Donation_item.hasMany(db.Donation_item_list, { foreignKey: 'Donation_itemId', sourceKey: 'idx'});

    db.Donation_item.belongsTo(db.Team, { foreignKey: 'TeamId', targetKey: 'idx'});
  }  
};