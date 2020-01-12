import express from 'express';
import User from '../models/user';
import {log, request} from './route_utils';

const router = express.Router ();

console.log (request);
class UserRouter {
  @request (router.post.bind (router), '/')
  static async create (req, res) {
    let body = req.body;
    let user = new User (body);
    await user.save ();
    return {user: user};
  }

  @request (router.get.bind (router), '/')
  static async getAll (req, res) {
    let users = await User.find ();
    return {users};
  }

  @request (router.post.bind (router), '/login')
  static async getFromLogin (req, res) {
    let {email, password} = req.body;
    console.log (email, password);
    let user = await User.findOne ({email, password});

    return {user};
  }

  @request (router.get.bind (router), '/:id')
  static async get (req, res) {
    let user = await User.findById (req.params.id);
    return {user};
  }

  @request (router.patch.bind (router), '/:id')
  static async update (req, res) {
    let user = await User.findById (req.params.id);
    return {user};
  }
}

export default router;
