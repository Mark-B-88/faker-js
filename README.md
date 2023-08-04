# Faker-js

Create a fake data set of users with faker-js

# Documenation

Faker-js documentation can be found by going [here](https://fakerjs.dev/)

# Setup

## Install Dependencies

`npm i`

## Setup .env in root

`PORT=<port-name>`

# Generate Users - API Call

- Modify the **_/controllers/employee.js_** controller to generate specific types of users/employees/people/etc and also the amount per API call

- make a GET request to **_/api/v1/employees_** to generate users

# Generate Users - npm script

You could also just run `npm run generate-users` to save the data in the root directory

```JSON
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js",
  "generate-users": "node generateUsers.js"
},
```
