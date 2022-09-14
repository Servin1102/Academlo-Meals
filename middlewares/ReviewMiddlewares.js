const { Review } = require('../models/reviewModel');
const { AppError } = require('../utils/AppError');

const reviewExists = async (req, res, next) => {
    const { sessionUser } = req;

    const review = await Review.findOne({
        where: { userId: sessionUser, status: 'active' },
    });
    if (!review) {
        return next(new AppError('Review not found given.', 404));
    }
    req.review = review;
    next();
};

module.exports = { reviewExists };
