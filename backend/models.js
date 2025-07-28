const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');

// Create 'user' database if it doesn't exist
async function ensureDatabase() {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'password' });
  await connection.query('CREATE DATABASE IF NOT EXISTS user');
  await connection.end();
}

// Initialize Sequelize for 'user' database
const sequelize = new Sequelize('user', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// User model schema
const User = sequelize.define('User', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  mobile: { type: DataTypes.STRING, allowNull: false }
});

module.exports = { sequelize, User, ensureDatabase }; 