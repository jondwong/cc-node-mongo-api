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

#### Routes
Routes use the `@request` decorator on the class functions as specified in `ROOT/src/routes/route_utils.js`. This wraps the async implementation for each route in a try catch that will send an error response on failures. It also with attach it to the router object that gets returned. It will deliver the object returned.
##### Sample example
```
class UserRouter {
  @request (router.post.bind (router), '/')
  static async create (req, res) {
    let body = req.body;
    let user = new User (body);
    await user.save ();
    return {user: user};
  }
  ...
}
```

You can add aditional routes from the template located at https://github.com/jondwong/dotfiles/blob/master/.cookiecutters/router.js.

To generate, I wrote a utility called chip to generate single files from a template instead of a repo. Find instructions for installation and usage at http://github.com/jondwong/chip.


#### Features
* [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.  
* babel - Compiles project into vanilla js, allowing you to use
* dotenv
* esLint
* express
* winston logging
* mongoose/mongodb
