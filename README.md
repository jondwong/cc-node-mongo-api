# cc-node-mongo-api
A basic nodejs server acting as an api, using mongodb as a backend.

### Generated Structure
```
REPO
|- package.json
|- jsconfig.json
|- .babelrc
|- logs
|- src
|   |- config
|       |- logging.js : contains the logger hooked up to winston
|   |- db
|       |- index.js : inits the DB connection with your local mongo
|   |- models
|       |- user.js
|   |- routes
|       |- route_utils.js : contains the @request decorator for each route
|       |- user.js : processes all user
```




#### Features
* [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.  
* babel - Compiles project into vanilla js, allowing you to use
* dotenv
* esLint
* express
* winston logging
* mongoose/mongodb
