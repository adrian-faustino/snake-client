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

module.exports = { setupInput };