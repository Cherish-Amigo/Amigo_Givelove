const Sequelize = require('sequelize');

module.exports = class Team extends Sequelize.Model {
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
      korea_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      english_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      mobile: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      ceo: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      business_number: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Team',
      tableName: 'teams',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }   
  static associate(db) {
    db.Team.hasMany(db.Donation_item, { foreignKey: 'TeamId', sourceKey: 'idx'}); // Team(1) : Item(N)
    db.Team.hasMany(db.Donation_money, { foreignKey: 'TeamId', sourceKey: 'idx'}); // Team(1) : money(N)
    db.Team.hasMany(db.Question, { foreignKey: 'TeamId', sourceKey: 'idx'}); // Team(1) : quesion(N)
  }
};