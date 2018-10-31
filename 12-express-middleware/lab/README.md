# Express

 Program for creating files of attorneys. All code implemented using ES6 and Babel.

 ## Server

 To start the server, open a terminal and type `node index.js`. You can now use HTTPie or Postman to make GET, POST, DELETE, and PUT requests.

 ## POST Attorney Objects

 When posting attorney objects, keep in mind they have name, numOfClients, and startDate properties.

 ## GET

 Providing no ID will display all attorney objects. Providing one ID after the path such as `/api/v1/attorneys/1234` will display the attorney with an ID of 1234.

 ## DELETE

 To delete an attorney object you must have their ID. For example typing `/api/v1/attorneys/1234` into a DELETE request will delete the attorney with an ID of 1234.

 ## PUT

 To change or update an attorney object, simply make a PUT request with the changed key. For example, an HTTPie request might look like `/api/v1/attorneys/1234 name=John`. This will effectively change the name of the attorney with an ID of 1234 to John, while still keep all other information intact.

 ## CORS

 This app uses CORS middleware