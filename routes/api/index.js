const express = require('express');
const router = express.Router();
const loginRoute = require('./login');
const registerRoute = require('./register');
const usersRoute = require('./users');
const logoutRoute = require('./logout');

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/users', usersRoute);
router.use('/logout', logoutRoute);

module.exports = router;