# Basic Auth

This app creates and authenticates users with hashed passwords using bcrypt. The users and their hashed passwords are stored in a Mongo DB.

## Connect to the database
 
Open a terminal and type `mongod --dbpath=` and then the path to your db folder.

## Log in to the database

Open another terminal and type `mongo`. On this window you will be able to see and use your databases, as well as see collections or single documents.

## Run the app

In another terminal, start the app with `node index.js`.

## POST and GET

In yet another terminal you can now make POST requests to the database using the path `/api/signup/` through HTTPie. The user model will take a username, an email, and a password. These are ALL REQUIRED and MUST BE UNIQUE.

For GET requests you will need your username and password. In HTTPie this can be done with `http GET :PORT/api/signin -a username:password`
