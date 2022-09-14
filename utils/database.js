const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

// dotenv.config({ path: "/config.env" });

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",//process.env.DB_HOST,
  username: "postgres", //process.env.DB_USERNAME,
  password: "servin01",//process.env.DB_PASSWORD,
  port: 4000,//process.env.DB_PORT,
  database: "proyecto1",//process.env.DB,
  logging: false,
});

module.exports = { db, DataTypes };
