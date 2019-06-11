const express = require('express');
const router = express.Router();
const protectedPath = require('../../auth/path-middleware.js');
const Users = require('../../users/user-model.js');

router.get('/*', protectedPath, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});







module.exports = router;