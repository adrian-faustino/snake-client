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
  const quoteList = ['Headshot!', 'Adrian is on a  KILLING SPREE', 'Ooof..', 'Next!', ';)', 'MONSTER KILL', 'GODLIKE', 'Fresh meat', 'OWNAGE', ':P', ':O', '¯\\_(o_o)_/¯)'];
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
    case 'r':
      return connection.write('Say: HEADSHOT!');
    case 'e':
      return connection.write('Say: ¯\_(ツ)_/¯)');
    case 'q':
      return connection.write(`Say: ${quoteList[randomNumber(0, quoteList.length - 1)]}`);
      
  }
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

module.exports = { setupInput };