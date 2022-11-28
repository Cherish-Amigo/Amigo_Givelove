'use strict';
const view_name = 'mainview';
const query = `
SELECT NAME FROM donation_moneys UNION ALL SELECT NAME FROM donation_items
`
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE VIEW ${view_name} AS ${query}`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DROP VIEW ${view_name}`);
  }
};