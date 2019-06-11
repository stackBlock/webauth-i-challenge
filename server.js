
const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const apiRoute = require('./routes/api/index.js');
const server = express();

const sessionConfig = {
    name: 'football',
    secret: '4th and goal',
    cookie: {
        maxAge: 10000 * 30,
        secure: false, // true in production
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false, //Check law - get permission
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));


server.get('/', (req, res) => {
    const nameInsert = (req.name) ? ` ${req.name}` : '';

    res.send(`
    <h2>Lambda Sprint API</h2>
    <p>Welcome${nameInsert} to the Lambda API Sprint!</p>
    `);
});

server.use('/api', apiRoute);

module.exports = server;