const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST, //"localhost"
  username: process.env.DB_USERNAME, //"postgres", 
  password: process.env.DB_PASSWORD,//"servin01"
  port: process.env.DB_PORT, //3001, 
  database: process.env.DB,//"proyecto1",
  logging: false,
});

module.exports = { db, DataTypes };
