const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//require database connection
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const auth = require('./auth');


//execute database connection
dbConnect();

// Curb Cores Error by adding a header here
//CROSS origin resource sharing//diffrent diffrent path (backend frontend) browser is
//not allowed this kind of a thing so for that this peice of code we used to connet backent to frontend.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});
//CRUD=> CREATE(post) READ(get) UPDATE(put) DELETE(delete)

//create a register end point here
app.post('/register', (request, response) => {
  //hash the pssword
  // console.log(request.body)

  bcrypt.hash(request.body.password, 10)
    .then((hashedPassword) => {
      // console.log({ hashedPassword })
      //create new user instance a create the data

      const user = new User({
        email: request.body.email,
        password: hashedPassword
      })
      // console.log({hashedPassword})
      user.save()
        //it returns success if the set is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result
          })

        })
        //catch the error if the new user was not created in the database
        .catch(error => {
          response.status(500).send({
            message: 'Error creating user',
            error
          })
        })
    })
    //catch the error the password is not successful
    .catch((error) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        error
      })
    })


});

// create a login endpoint.
app.post('/login', (request, response) => {
  //check if the email that user enters on login exists
  User.findOne({ email: request.body.email })
    //if email exists
    .then((user) => {
      //compare the password entered by user and the hashed password found in db
      // console.log({ user })
      bcrypt.compare(request.body.password, user.password)
        //check if password matches
        .then((passwordCheck) => {
          console.log({ passwordCheck })

          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error
            })
          }
          //create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmaiL: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          // return the success response

          response.status(200).send({
            message: "Login Successfull",
            email: user.email,
            token
          })

        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error
          })
        })


    })
    //catch error if email does not exist
    .catch((error) => {
      console.log(error)
      response.status(404).send({
        message: "Email not found",
        error
      })
    })

})


//how to protects the end points

//free endpont.

app.get("/free-endpoint", (request, response) => {
  response.send({
    message: "You are free to access this anytime"
  });
})



//authentication endpoint

app.get("/auth-endpoint", auth, (request, response) => {
  response.send({
    message: "You are authorized to access me"
  })
})



module.exports = app;














