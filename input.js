let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin; //this is input
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    console.log(data)
    handleUserInput(data);
  });

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    return process.exit();
  }
  switch (key) {
    case 'w':
      return connection.write('Move: up');
    case 'a':
      return connection.write('Move: left');
    case 's':
      return connection.write('Move: down');
    case 'd':
      return connection.write('Move: right');
  }
};

module.exports = { setupInput };