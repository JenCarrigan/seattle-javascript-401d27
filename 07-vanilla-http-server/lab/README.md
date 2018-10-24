## Lab 07

This program takes two GET routes and a POST route to output a cowified message to the client.

## Routes

### GET /

This route provides a link to cowsay.

### GET /cowsay?text=message

Replace the `message` portion of the query to whatever you would like cowified. For example: `/cowsay?text=mooooooooo`.

### POST /api/cowsay

Use this route in order to send data to cowsay's API and have it return your cowified message. Using the above with a query string will return a 400. To use this, I suggest HTTPie or Postman. If using HTTPie, load the server in one terminal window, and in another terminal window type `http POST text=message` but replace the message portion of the query with your own.

## Notes
As of yet, the 400 gets sent, but am having trouble with sending a response body along with the 400.

