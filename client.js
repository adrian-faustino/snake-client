const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => { //once we are conected, we add a listener to interpret incoming data
    console.log(data);
  });

  conn.on('connect', () => { //so basically conn is the name of the connection...
    conn.write('Name: ADN');
    // setInterval(() => { conn.write('Move: up'); }, 1000);
    console.log('Successfully connected to game server!');
  });

  return conn;
};

const setupInput = function() {
  const stdin = process.stdin; //this is input
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data);
  });

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    return process.exit();
  }
};

module.exports = { 
  connect,
  setupInput,
 };