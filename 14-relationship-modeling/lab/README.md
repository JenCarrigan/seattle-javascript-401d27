# Mongo Double Resource

This app creates documents for two resources, attorneys and their providers, in a NoSQL database, in this case MongoDB.

## Connect to the database
 
Open a terminal and type `mongod dbpath=` and then the path to your db folder

## Log in to the database

Open another terminal and type `mongo`. On this window you will be able to see and use your databases, as well as see collections or single documents.

## Run the app

In another terminal, start the app with `node index.js`.

## Make requests

In yet another terminal, you can finally get to the meat and make requests with HTTPie. Or, if you feel so bold, feel free to use Postman.

## Attorney Schema

The attorney schema has a name, a number of clients, and their start date. An ID will be assigned by Mongo.

## Provider Schema

The provider schema has a name, a phone numbers, and an object reference to their attorney. An ID will be assigned by Mongo

## Relationships

The attorney to provider relationship is a one to many relationship. An attorney can have many providers that refer them clients, but a provider can only refer clients to one attorney. Therefore, the only reference to an attorney lies with the provider. If you need to change an attorney's provider, go to that provider to change it.