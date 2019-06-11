const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.json({ message: 'not looged out - error' })
            } else {
                res.status(200).json({ message: 'bye, bye!' });
            }
        })
    } else {
        res.status(200).json({ message: 'You were never logged in!' });
    }
})

module.exports = router;