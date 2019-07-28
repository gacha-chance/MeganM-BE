const express = require('express');
const server = express();

const setup = require('../config/setup.js');
setup(server);


const userRouter = require('../user/userRoute.js');
const authRouter = require('../auth/authRoute.js');


server.use('/api', authRouter);
server.use('/api', userRouter);


server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;