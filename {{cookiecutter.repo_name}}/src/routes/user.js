import express from 'express';

var userRouter = express.Router ();

// define the home page route
userRouter.get ('/', function (req, res) {
  res.json ({response: {user: 'SUCCESS'}});
});

export default userRouter;
