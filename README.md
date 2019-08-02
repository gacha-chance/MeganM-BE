# Gacha Chance Read Me

# Endpoints
| HTTP | Endpoint | Description |
|------|----------|-------------|
|POST  | /api/register | Allows a user to _register_ with a `username` & `password`, returns a json object that gives the `user id` and their `username`. |
|POST | /api/login | Allows a user to _login_ with a `username` & `password`, returns the `user id`, a `welcome message`, and the user's `token`. |
|GET |  /api/registered | Allows a _logged in_ user to view a list of all the `registered users` | 
|GET | /api/registered/:id | Allows a _logged in_ user to view a specific registered user based on the id entered into the URL. |
|POST | /api/registered/:id/addChance | Allows a _logged in_ user to save their `chance` calculations to their profile based on their id in the URL. Returns the id of the resource added. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addComp | Allows a _logged in_ user to save their `compoundedChance` calculations to their profile based on their id in the URL. Returns the id of the resource added. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addRoll | Allows a _logged in_ user to save their `rollNum` calculations to their profile based on their id in the URL. Returns the id of the resource added. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addDesired | Allows a _logged in_ user to save their `desiredOutcome` calculations to their profile based on their id in the URL. Returns the id of the resource added. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|GET | /api/saved/:id | Allows a _logged in_ user to view saved calculations based on the id entered into the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |


## Successful Registration
```json
[
  {
    "id": 32,
    "username": "Megan"
  }
]
```

## Successful Login 
```json
{
  "id": 32,
  "message": "Welcome Megan",
  "token": "..."
}
```
**NOTE**: `Tokens` for this API expire after 8 hours.


## Successful `GET` on `/api/registered`

```json
[
  {
    "id": 1,
    "username": "TestUser"
  },
  {
    "id": 2,
    "username": "NewTest"
  },
  {
    "id": 3,
    "username": "testUser"
  },
  {
    "id": 4,
    "username": "josh@josh.com"
  },
  {
    "id": 7,
    "username": "Test2ser"
  },
  {
    "id": 11,
    "username": "jordan"
  },
  {
    "id": 13,
    "username": "falco12354@hotmail.com"
  },
  {
    "id": 17,
    "username": "TestUser2"
  },
  {
    "id": 18,
    "username": "123"
  },
  {
    "id": 20,
    "username": "joshua"
  },
  {
    "id": 23,
    "username": "joshd"
  },
  {
    "id": 24,
    "username": "MeganIsAwesome"
  },
  {
    "id": 26,
    "username": "bob"
  },
  {
    "id": 27,
    "username": "dakiscool"
  },
  {
    "id": 32,
    "username": "Megan"
  }
]
```

## Successful `GET` on `/api/registered/:id`

```json
  {
    "id": 32,
    "username": "Megan"
  }
```

## Successful `GET` on `/api/saved/:id`

```json
{
  "id": 7,
  "username": "Test2ser",
  "chance": [
    {
      "id": 4,
      "chance": "1.00"
    },
    {
      "id": 5,
      "chance": "2.00"
    },
    {
      "id": 26,
      "chance": "2.00"
    },
    {
      "id": 27,
      "chance": "2.00"
    },
    {
      "id": 29,
      "chance": "1.00"
    },
    {
      "id": 30,
      "chance": "2.00"
    },
    {
      "id": 31,
      "chance": "3.00"
    },
    {
      "id": 32,
      "chance": "3.00"
    },
    {
      "id": 35,
      "chance": "2.00"
    },
    {
      "id": 36,
      "chance": "1.00"
    },
    {
      "id": 37,
      "chance": "2.00"
    },
    {
      "id": 38,
      "chance": "2.00"
    },
    {
      "id": 48,
      "chance": "2.00"
    }
  ],
  "rollNum": [
    {
      "id": 5,
      "rollNum": 1
    },
    {
      "id": 6,
      "rollNum": 2
    },
    {
      "id": 27,
      "rollNum": 1
    },
    {
      "id": 28,
      "rollNum": 1
    },
    {
      "id": 30,
      "rollNum": 3
    },
    {
      "id": 31,
      "rollNum": 3
    },
    {
      "id": 32,
      "rollNum": 1
    },
    {
      "id": 33,
      "rollNum": 1
    },
    {
      "id": 36,
      "rollNum": 1
    },
    {
      "id": 37,
      "rollNum": 1
    },
    {
      "id": 38,
      "rollNum": 1
    },
    {
      "id": 39,
      "rollNum": 1
    },
    {
      "id": 49,
      "rollNum": 2
    }
  ],
  "compoundedChance": [
    {
      "id": 11,
      "compoundedChance": "1.00"
    },
    {
      "id": 12,
      "compoundedChance": "3.96"
    },
    {
      "id": 33,
      "compoundedChance": "0.67"
    },
    {
      "id": 34,
      "compoundedChance": "1.01"
    },
    {
      "id": 36,
      "compoundedChance": "2.97"
    },
    {
      "id": 37,
      "compoundedChance": "5.88"
    },
    {
      "id": 38,
      "compoundedChance": "3.00"
    },
    {
      "id": 39,
      "compoundedChance": "0.76"
    },
    {
      "id": 42,
      "compoundedChance": "2.00"
    },
    {
      "id": 43,
      "compoundedChance": "0.33"
    },
    {
      "id": 44,
      "compoundedChance": "2.00"
    },
    {
      "id": 45,
      "compoundedChance": "2.00"
    },
    {
      "id": 55,
      "compoundedChance": "20.30"
    }
  ],
  "desiredOutcome": [
    {
      "id": 4,
      "desiredOutcome": 1
    },
    {
      "id": 5,
      "desiredOutcome": 1
    },
    {
      "id": 26,
      "desiredOutcome": 3
    },
    {
      "id": 27,
      "desiredOutcome": 2
    },
    {
      "id": 29,
      "desiredOutcome": 1
    },
    {
      "id": 30,
      "desiredOutcome": 1
    },
    {
      "id": 31,
      "desiredOutcome": 1
    },
    {
      "id": 32,
      "desiredOutcome": 4
    },
    {
      "id": 35,
      "desiredOutcome": 1
    },
    {
      "id": 36,
      "desiredOutcome": 3
    },
    {
      "id": 37,
      "desiredOutcome": 1
    },
    {
      "id": 38,
      "desiredOutcome": 1
    },
    {
      "id": 48,
      "desiredOutcome": 5
    }
  ]
}
```

