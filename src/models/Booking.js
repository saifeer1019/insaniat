import { DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Adjust the path as necessary

const Booking = sequelize.define('Booking', {
  // Sequelize automatically creates an 'id' field as the primary key
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  people: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bookedOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  journeyStart: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bookingStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Unpaid',
  },
});

export default Booking;