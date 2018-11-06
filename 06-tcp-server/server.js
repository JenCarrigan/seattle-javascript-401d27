'use strict';

// first-party modules -- built in to Node
const net = require('net');
const EE = require('events');

// internal files
const Client = require('./demo/model/client.js');

// environment
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// make a new server
const server = net.createServer();

// new instance of EE
const ee = new EE();

// set up a pool to hold on to all of the current users
const pool = [];

// set up a connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  pool.push(client);
  client.socket.write('Welcome to the chat room!\n');

  // data === when someone types a message
  socket.on('data', (data) => {
    // console.log('this is the data', data);  <-- this is a buffer
    // console.log('this is the data.toString()', data.toString());

    // first command: @all, which will send a message to everyone in the chat room
    const command = data.toString().split(' ').shift().trim();

    //need to handle DMs
    if(command.startsWith('@dm')) {
      const toClient = data.toString().split(' ').slice(1,2)[0];
      const dm = data.toString().split(' ').splice(2).join(' ');
      ee.emit(command, client, toClient, dm);
    }

    if(command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    // default behavior 
    ee.emit('default', client);
  });

});

// register event listeners
ee.on('@all', (client, message) => {
  pool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@nickname', (client, string) => {
  let nickname = string.split(' ').shift().trim();
  client.nickname = nickname;
  client.socket.write(`Your nickname has been changed to ${string}`);
});

ee.on('@quit', (client) => {
  //end the client's session
  client.socket.end('Your session has ended\n');

   //delete the client from the user pool
  // console.log(client);
  // console.log(pool[0].id);
  pool.forEach((user, index) => {
    if(user === client) {
      pool.splice(index, 1);
    }
  });

  //print to others in chat person has left
  pool.forEach(user => {
    user.socket.write(`${client.nickname} has left the chat.\n`)
  });
});

ee.on('@list', (client) => {
  client.socket.write('Here are the connected users:\n');
  pool.forEach(user => {
    client.socket.write(`${user.nickname}\n`);
  });
});

ee.on('@dm', (fromClient, toClient, message) => {
  //iterate over pool
  //find client that matches toClient
  //write `DM from ${fromClient.nickname}: ${message}`
  pool.forEach(user => {
    if (user.nickname === toClient) {
      user.socket.write(`DM from ${fromClient.nickname}: ${message}`);
    }
  });
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});

// make sure the server is listening
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

// we can also write helper functions
// ee.on('@all', messageAll);
// const messageAll = (client, message) => {
//   pool.forEach(user => {
//     user.socket.write(`${client.nickname}: ${message}`);
//   });
// };
