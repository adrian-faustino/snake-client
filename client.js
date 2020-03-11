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
    console.log('Successfully connected to game server!');
  });

  return conn;
};

module.exports = { connect };