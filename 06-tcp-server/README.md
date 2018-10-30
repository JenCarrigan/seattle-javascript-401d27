# Telnet Chatroom

A chatroom designed using TCP. Uses net and events APIs on Node.js.

## Configuration

README.md - contains documentation
package.json - contains npm package config
create a start script for running your server
server.js - the entry point for the server
model/client.js - contains the client class that assigns uuid, nickname and socket to user

## To start server

From a terminal, begin node server.js

## To start chatting

From a terminal, type `telnet [your ip address] [the listening port]` to connect

## Commands
`@all <message>` - Sends a message to all users in the chat

`@quit` - Quits the chat

`@list` - Lists all currently connected users in the chat

`@nickname <newnickname>` - Changes your god awful initial nickname to something new

`@dm <person nickname to send to> <message>` - Sends a direct message to the person you want
