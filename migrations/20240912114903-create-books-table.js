// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Books', {
//       id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//       },
//       title: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       author: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       year: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//     });
//   },

//   down: async (queryInterface) => {
//     await queryInterface.dropTable('Books');
//   },
// };


'use strict';

/** @type {import('sequelize').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};