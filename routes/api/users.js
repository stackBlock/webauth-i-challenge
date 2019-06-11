const express = require('express');
const router = express.Router();
const Users = require('../../users/user-model.js');


router.get('/', protected, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

function protected(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        next();
    } else {
        res.status(400).json({ message: 'invalid credentials' });
    }
}


module.exports = router;