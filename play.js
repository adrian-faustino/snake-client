const { 
  connect
 } = require('./client');

 const {
   setupInput
 } = require('./input');


console.log('Connecting . . .');
let conn = connect();
conn;
setupInput(conn);