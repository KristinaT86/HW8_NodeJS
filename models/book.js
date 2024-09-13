const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js'); // Заменить import на require

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Book; // Заменить export default на module.exports
