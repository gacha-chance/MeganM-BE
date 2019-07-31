const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generateToken')

const users = require('../data/dataModeling/usersModel');

router.post('/register', (req, res) => {
    console.log('\n Req for error\n',req.body);
    let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
    
    console.log('\ninsomnia test\n', user);

	users.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                ...user,
                message: `Welcome ${user.username}`,
                token
            })
        } else {
            res.status(401).json({ message: "Invalid Credentials" })
        }
    })

})

module.exports = router;