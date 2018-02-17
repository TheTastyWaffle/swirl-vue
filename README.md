#Swirl 2018 - Subject 01 Vue.js
josso_t

## Description
Basic ~REST (all 200 status) api handled with JSON as data.

## Usage
Use yarn preferably


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

### Front-end ('front' folder)