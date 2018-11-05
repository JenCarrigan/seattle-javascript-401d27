# Mongo Single Resource

This app creates documents for a single resource (attorneys) in a NoSQL database, in this case MongoDB.

## Connect to the database

Open a terminal and type `mongod dbpath=` and then the path to your db folder

## Log in to the database

Open another terminal and type `mongo`. On this window you will be able to see and use your databases, as well as see collections or single documents.

## Run the app

In another terminal, start the app with `nodemon` or `node index.js`.

## Make requests

In yet another terminal, you can finally get to the meat and make requests with HTTPie. Or, if you feel so bold, feel free to use Postman.

## Attorney Schema

The attorney schema has a name, a number of clients, their start date, and an array of their referring providers. Note that if you would like to fill out referring providers, HTTPie is not a good resource for this. Please use Postman.