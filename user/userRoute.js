const router = require("express").Router();

const users = require("../data/dataModeling/usersModel");
const authenticate = require("../auth/authenticate.js");

router.get("/registered", authenticate, (req, res) => {
	users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

router.get("/registered/:id", authenticate, (req, res) => {
    const { id } = req.params;
    users.findById(id)
    .then(registered => {
        res.status(200).json(registered)
    })
    .catch(error => res.status(500).json(error))
})

module.exports = router;
