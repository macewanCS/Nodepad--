// models/user.js

var Sequelize = require("sequelize")
module.exports = function(){
  Sequelize.define("user", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  })
  return user};
