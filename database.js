// src/database.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.NEXT_PUBLIC_SQL_DBNAME, process.env.NEXT_PUBLIC_SQL_USERNAME, process.env.NEXT_PUBLIC_SQL_PASSWORD, process.env.NEXT_PUBLIC_SQL_HOST);

// Create a new instance of Sequelize
const sequelize = new Sequelize(process.env.NEXT_PUBLIC_SQL_DBNAME, process.env.NEXT_PUBLIC_SQL_USERNAME, process.env.NEXT_PUBLIC_SQL_PASSWORD, {
  host: process.env.NEXT_PUBLIC_SQL_HOST,
  dialect: 'mysql',
});
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
  
}
testConnection();
module.exports = sequelize;