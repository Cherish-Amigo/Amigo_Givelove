const Sequelize = require('sequelize');

module.exports = class Item extends Sequelize.Model {
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
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      explanation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Item',
      tableName: 'items',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Item.hasMany(db.Item_image, { foreignKey: 'ItemId', sourceKey: 'idx'}); // Item(1) : Item_image(N) 

    db.Item.belongsTo(db.User, { foreignKey: 'UserId', targetKey: 'idx'}); // Item(N) : User(1) 

    db.Item.belongsTo(db.Donation_item, { foreignKey: 'Donation_itemId', targetKey: 'idx'}); // Item(1) : Donation_item(1) 
  }
};