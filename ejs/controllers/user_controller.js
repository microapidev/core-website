/* eslint-disable camelcase */
const fs = require('fs');
const uu = require('uuid');
const users = require('../models/user_model');
const validator = require('./utility/validator');
const passwordValidator = require('password-validator');

module.exports = {
  create: async (req, res) => {
    // desturing for quick retrieving of inputs
    const {
      first_name, last_name, email, phone, password, cpassword,
    } = req.body;
    // hash your password with bycrypt
    try {
      // create category
      const newUser = {
        id: uu.v4(),
        first_name,
        last_name,
        email,
        phone,
        password,
        cpassword,
      };
      // validate and return errors
      const options = {
        errors: {
          wrap: {
            label: ""
          }
        }
      }
      const {error} = validator.signupvalidation(req.body,options);
      if(error) 
          {   
            return res.status(400).json({ msg: error.details[0].message.replace(/\//g, "") });
          } 

      if (password !== cpassword) {
        return res.status(400).json({ msg: "Password didn't correspond" });
      }
       //validate password
       const schema = new passwordValidator()
       schema
      .has().uppercase()
      .has().lowercase()
      .has().digits()
      .has().not().spaces() 
     if(schema.validate(password) == false){
      return res.status(400).json({ msg: "Password must contain uppercase,lowercase and digit" });
     }
     
      users.push(newUser);
      fs.writeFileSync('models/userdata.json', JSON.stringify(users));
      // return res.status(400).send({message:"failed to register"})


      return res.status(200).json({ message: 'Registration succesful', data: users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  login: async (req, res) => {
    const options = {
      errors: {
        wrap: {
          label: ""
        }
      }
    }
    // validate the user first
    const { email, password } = req.body;
    if(email === "" || password === ""){
      res.status(400).json({message:"All field must be filled"})
    }
    //valid the user email in case of hacking attempt lolz
    const {error} = validator.loginvalidation({ email, password },options);
    if(error) 
        {   
          return res.status(400).json({ msg: error.details[0].message.replace(/\//g, "") });
        } 
    

    // validate the user
    try {
      const found = users.some((user) => user.email === email && user.password === password);
      if (found) {
        //  res.json(users.filter(users=>users.email===email));
        res.status(200).json({ message: 'Success', Token: uu.v4(), found });
      } else {
        res.status(400).json({ msg: 'user not found' });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
