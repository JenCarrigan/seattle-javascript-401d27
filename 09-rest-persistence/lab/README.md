# Persistence

This program tests the persistence of storage in both memory and a filesystem on your localhost with a path of `api/v1/notes`.

## Server

Start the server in your terminal through node js. Once in you can now either use HTTPie or Postman to post, get, and delete data from either your memory or filesystem.

## Storage

To change the storage, create a dotenv and specify with a `STORAGE=` and write filesystem in order to use a file storage mechanism. To use memory, you do not need to specify.

## How it Works

For memory, upon starting the server, there will be nothing for the program to reference. Every time the server is stopped and restarted, you MUST redo your POSTs in order to store the data. Once you make a POST request, use the convention `subject=` and `noteBody=` with the data you would like to send after the `=`.

Once your note has been created, an ID, using uuid, will be automatically created for you. Once you do a GET request to your localhost with the path `api/v1/notes` you will see all of your POSTed data. You can now DELETE a note with the created ID. Make sure to pass the query in as `?id=`.

For the filesystem, your POSTed data will be saved in the data folder with its ID as a JSON file.