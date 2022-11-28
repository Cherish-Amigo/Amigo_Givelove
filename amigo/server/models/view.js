const Sequelize = require('sequelize-views-support');

module.exports = (Sequelize, DataTypes) => {
    const View = Sequelize.define('view', {
      name: DataTypes.STRING,
    }, {
      treatAsView: true,
      viewDefinition: `
      CREATE VIEW main AS
      SELECT NAME
      FROM donation_moneys
      UNION ALL
      SELECT NAME
      FROM donation_items
      `
    });
   
    return View;
  };