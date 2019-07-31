const router = require("express").Router();

const users = require("../data/dataModeling/usersModel");
const authenticate = require("../auth/authenticate.js");

router.get("/registered", authenticate, (req, res) => {
  users
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/registered/:id", authenticate, (req, res) => {
  const { id } = req.params;
  users
    .findById(id)
    .then(registered => {
      res.status(200).json(registered);
    })
    .catch(error => res.status(500).json(error));
});

router.post("/registered/:id/addChance", authenticate, (req, res) => {
  const chance = {
    user_id: req.params.id,
    ...req.body,
  };

  users
    .addChance(chance)
    .then(chance => {
      res.status(201).json(chance);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/registered/:id/addComp", authenticate, (req, res) => {
  const compChance = {
    user_id: req.params.id,
    ...req.body,
  };

  users
    .addCompChance(compChance)
    .then(compChance => {
      res.status(201).json(compChance);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/registered/:id/addRoll", authenticate, (req, res) => {
  const rollNum = {
    user_id: req.params.id,
    ...req.body,
  };

  users
    .addRollNum(rollNum)
    .then(rollNum => {
      res.status(201).json(rollNum);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/registered/:id/addDesired", authenticate, (req, res) => {
  const desiredOutcome = {
    user_id: req.params.id,
    ...req.body,
  };

  users
    .addDesired(desiredOutcome)
    .then(desiredOutcome => {
      res.status(201).json(desiredOutcome);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/saved/:id", authenticate, (req, res) => {
  const userId = req.jwtToken.id;
  const { id } = req.params;

  if (userId !== req.params.id) {
    res.status(400).json({
      error: "You cannot access this data",
    });
  } else {
    users
      .displayCalculations(id)
      .then(calc => {
        res.status(200).json(calc);
      })
      .catch(error => res.status(500).json(error));
  }
});

module.exports = router;
