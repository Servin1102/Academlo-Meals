const express = require('express');

//ROUTES
const { usersRoutes } = require('./routes/UsersRoutes');
const { restaurantRoutes } = require('./routes/RestaurantRoutes');
const { mealRoutes } = require('./routes/MealRoutes');
const { orderRoutes } = require('./routes/OrderRoutes');
const { globalErrorHandler } = require('./controllers/ErrorController');

//
const app = express();


//eneable Express app to recieve JSON data
app.use(express.json());

//define enpoints
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);
app.use('/api/v1/meals', mealRoutes);
app.use('/orders', orderRoutes);


//catch non-existing endpoints
app.use('*', globalErrorHandler)

module.exports = { app}