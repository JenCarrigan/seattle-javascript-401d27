## HTTP Routing

This program uses a defined router to route the client to the method (GET, POST, PUT, DELETE)

### GET

Go to the localhost of your defined port with the path /api/v1/notes. For example, if your litening on port 3000, go to `http://localhost:3000/api/v1/notes`.

Append a query string to the end of this URL in the form of `?id=`. Note that you must have the key of `id`. For example, if you would like an ID of 1234 the fill path will be `http://localhost:3000/api/v1/notes?id=1234`.

Invalid GET requests will send either a 400 or 404.

### POST

In some API tester such as HTTPie or Postman, you are able to pass information through the POST route. Valid JSON will return the proper body whereas invalid JSON will return a 400.

### PUT

Routes valid JSON to a PUT request

### DELETE

Routes valid JSON to a DELETE request and informs the client the ID was deleted.