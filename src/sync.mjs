// src/sync.js
import sequelize from './lib/database.js';
import Booking from './models/Booking.js';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Test the connection
    console.log('Connection has been established successfully.');

    await Booking.sync({ force: true }); // This will create the table
    console.log('Booking table has been created successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close(); // Close the connection
  }
};

syncDatabase();