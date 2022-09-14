const { Meal } = require('../models/mealModel');
const { Restaurant } = require('../models/restaurantModel');

// get all meals
const getAllMeals = async (req, res, next) => {
    const meals = await Meal.findAll({
        include: [{ model: Restaurant }],
        where: { status: 'active' },
    });

    res.status(200).json({ meals });
};

//create new meal
const createMeal = async (req, res, next) => {
    const { name, price } = req.body;

    const newMeal = await Meal.create({
        name,
        price,
    });

    res.status(201).json({ newMeal });
};

// get meal for id 
const getMealById = async (req, res, next) => {
    const { meal } = req;
    res.status(200).json(meal);
};

//update Meal
const updateMeal = async (req, res, next) => {
    const { meal } = req;
    const { name, price } = req.body;
    await meal.update({ name, price });
    res.status(200).json({ status: 'succes' });
};

//delete meal
const deleteMeal = async (req, res, next) => {
    const { meal } = req;
    await meal.update({ status: 'deleted' });
    res.status(200).json({ status: 'succes' });
};

module.exports = {
    getAllMeals,
    getMealById,
    createMeal,
    updateMeal,
    deleteMeal,
};
