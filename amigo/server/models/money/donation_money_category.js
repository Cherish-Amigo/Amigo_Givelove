const Sequelize = require('sequelize');

module.exports = class Donation_money_category extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Donation_money_category',
      tableName: 'donation_money_categorys',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Donation_money_category.belongsTo(db.Donation_money, { foreignKey: 'Donation_moneyId', targetKey: 'idx'});
  }  
};