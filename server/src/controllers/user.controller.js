import User from "../models/user.model";
import _ from "lodash";
import errorHandler from "../helpers/dbErrorHandler";



const findOneUser = (req, res) => {

    User.findOne({ 'username': req.body.username }, (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: "User not found!" });
      }
      res.status(200).json({
        user: { _id: user._id, username: user.username, email: user.email },
      });
    });
  };


// when app gets a POST request it calls a create function bellow
// creates a new user with JSON object recieved
const create = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "Successfully created a new user" });
  });
};
// find all users from db, creates user list
// and returns a list as JSON objects in an array to
// the requesting client
const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json(users);
  }).select("username firstname lastname email status update created");
};
// The userById function uses the value in the :userId param to
// query the database by _id and load matching user's details
// the next() middleware is used to propagate controll to the
// next relevant controler function
const userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    console.log('Ovo je funkcija UserById', user)
    if (err || !user) {
        //console.log(user);
      return res.status(404).json({ error: "User not found!" });
    }
    req.profile = user;
    next();
  });
};
// when the app gets a GET request it executes userById controller
// and than the read coontroller function
const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json(req.profile);
};


// const read = (req, res) => {
//     const id = req.params._id;

//     console.log('Ovo je funkcija read', id);

//    User.findById(id).exec((err,user)=>{
//         if (err){
//             return res.status(400).json(err.message);
//         }
//         //console.log(user);
//         res.status(200).json(user);
//     })
//   };

// updating a single user
// retrives a single user than uses the lodash method
// to extend and merge changes that came in request body
// to updatethe user data
const update = (req, res, next) => {
  let user = req.profile;
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save((err) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage() });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.status(200).json(user);
  });
};
// when the app gets a DELETE request it first loads user by ID and
// then remove controller function is executed
const remove = (req, res, next) => {
  let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage() });
    }
    deletedUser.hashed_password = undefined;
    res.status(200).json(deletedUser);
  });
};

export default { create, list, userById, read, update, remove, findOneUser };



