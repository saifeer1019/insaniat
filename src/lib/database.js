   // testConnection.js
 import { Sequelize } from 'sequelize';
 import dotenv from 'dotenv';
   
      // Load environment variables from .env file
      dotenv.config();
   
      const sequelize = new Sequelize(process.env.NEXT_PUBLIC_SQL_DBNAME, process.env.NEXT_PUBLIC_SQL_USERNAME, process.env.NEXT_PUBLIC_SQL_PASSWORD, {
        host: process.env.NEXT_PUBLIC_SQL_HOST,
        dialect: 'mysql',
        dialectModule: require('mysql2'),
      });
   
 
module.exports = sequelize;