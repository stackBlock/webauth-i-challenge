const express = require('express');
const router = express.Router();
const loginRoute = require('./login');
const registerRoute = require('./register');
const usersRoute = require('./users')

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/users', usersRoute);

module.exports = router;