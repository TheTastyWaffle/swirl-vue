# Swirl 2018 - Subject Vue.js
Authors: Thomas Josso <thomas.josso@gmail.com>




# Subject
Your job is to implement a Vue.js client with at least 3 components.

The 'front' folder should be used as an example for those struggling with Vue.js,
but in any case the content is mandatory. You should avoid copy-pasting code
from it and making your own components with your own ideas.

I even recommend to delete the 'front' folder after having a look, as you will
learn a lot more by yourself 👨‍🎓 (the repository will never give you up,
do not worry 🙃)

## Description
Basic ~RESTful api handled with JSON as data.

## Usage
Use yarn preferably.

By default, back-end runs on port 8080, front-end on port 8081.
Endpoints are hardcoded, if need be you will need to changes those ports manually 😕.




### Front-end ('front' folder)
```
yarn install
```

Start the front client:
```
yarn run dev
```

#### Where to look

- ./src/router/index.js: components entry point, inside the Vue App
- ./src/components: where your (at least 3) components should be




### Back-end ('back' folder)
```
yarn install
```

Start the back end independently:
```
node_modules/nodemon/bin/nodemon.js server.js
```

Routes
```
GET     .../THEME           //Returns all THEMEs
POST    .../THEME           //Take an "author" as body parameter then create a THEME

GET     .../THEME/THEMEId   //Returns the THEME with THEMEId id
PUT     .../THEME/THEMEId   //Not implemented (irrelevant)
DELETE  .../THEME/THEMEId   //Deletes THEME with THEMEId id
```

The JSON response is as follow
```
data                        //Contains the relevant data, null if error
message                     //Explicit method used
error                       //Error message, null if none
```

#### Where to look

- ./api/routes/THEME.js: routes for THEME model
- ./api/controllers/THEME.js: logic for THEME routes 
- ./server.js: server entry point and header configuration
