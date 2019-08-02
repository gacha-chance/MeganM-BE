# Gacha Chance Read Me

# Endpoints
| HTTP | Endpoint | Description |
|------|----------|-------------|
|POST  | /api/register | Allows a user to _register_ with a `username` & `password`, returns a json object that gives the `user id` and their `username`. |
|POST | /api/login | Allows a user to _login_ with a `username` & `password`, returns the `user id`, a `welcome message`, and the user's `token`. |
|GET |  /api/registered | Allows a _logged in_ user to view a list of all the `registered users` | 
|GET | /api/registered/:id | Allows a _logged in_ user to view a specific registered user based on the id entered into the URL. |
|POST | /api/registered/:id/addChance | Allows a _logged in_ user to save their `chance` calculations to their profile based on their id in the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addComp | Allows a _logged in_ user to save their `compoundedChance` calculations to their profile based on their id in the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addRoll | Allows a _logged in_ user to save their `rollNum` calculations to their profile based on their id in the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|POST | /api/registered/:id/addDesired | Allows a _logged in_ user to save their `desiredOutcome` calculations to their profile based on their id in the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |
|GET | /api/saved/:id | Allows a _logged in_ user to view saved calculations based on the id entered into the URL. **Future feature to add**: Throw error if id in token does not match the id in the provided in the URL. |









