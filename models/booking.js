const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const AppointmentBooking = sequelize.define('appointment_booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNo: {
        type: Sequelize.STRING(20), // Set an appropriate length for phone numbers
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = AppointmentBooking;

