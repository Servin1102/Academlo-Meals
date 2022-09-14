const { User } = require("../models/userModel");
const { Review } = require("../models/reviewModel");
const { Restaurant } = require("../models/restaurantModel");
const { Order } = require("../models/orderModel");
const { Meal } = require("../models/mealModel");

const initModels = () => {
  User.hasMany(Review, { foreignKey: "userId" });
  Review.belongsTo(User);

  User.hasOne(Order, { foreignKey: "userId" });
  Order.belongsTo(User);

  Meal.hasOne(Order, { foreignKey: "mealId" });
  Order.belongsTo(Meal);

  Restaurant.hasMany(Review, { foreignKey: "restaurantId" });
  Review.belongsTo(Restaurant);

  Restaurant.hasMany(Meal, { foreignKey: "restaurantId" });
  Meal.belongsTo(Restaurant);
};

module.exports = { initModels };