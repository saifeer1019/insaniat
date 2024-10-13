   // testConnection.js
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

   // Load environment variables from .env file
   dotenv.config();

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
     } finally {
       await sequelize.close(); // Close the connection
     }
   }

   testConnection();
   console.log('Database Name:', process.env.NEXT_PUBLIC_SQL_DBNAME);
   console.log('Username:', process.env.NEXT_PUBLIC_SQL_USERNAME);
   console.log('Password:', process.env.NEXT_PUBLIC_SQL_PASSWORD);
   console.log('Host:', process.env.NEXT_PUBLIC_SQL_HOST);