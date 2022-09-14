const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel');
const { AppError } = require('../utils/appError');

const protectToken = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return  res.status(404).json({
            status: 'error',
            message: 'User not found',
        });
    }
    //VALIDATE TOKEN
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
        where: { id: decoded.id, status: 'active' },
    });

    if (!user) {
        return next(
            new AppError('The owner of this token is no longer avalible', 403)
        );
    }

    req.sessionUser = user;
    next();
};

const protectAdmin = async (req, res, next) => {
    if (req.sessionUser.role !== 'admin') {
        return next(new AppError('Access not granted', 403));
    }
    next();
};

const userExists = async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findOne({ where: { id, status: 'active' } });
    if (!user) {
        return next(new AppError('User not found given that id.', 404));
    }
    req.user = user;
    next();
};

const protectAccountOwner = async (req, res, next) => {
    const { user, sessionUser } = req;
    if (user.id !== sessionUser.id) {
        return next(new AppError('You cdo not own this account', 403));
    }
    next();
};

module.exports = {
    userExists,
    protectToken,
    protectAdmin,
    protectAccountOwner,
};
