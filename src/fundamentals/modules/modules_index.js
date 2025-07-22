// Modules are reusable pieces of code that can be imported into other files.
// they are encapsulated code blocks that can be used to organize code better.
// made to share only the necessary parts of the code, keeping the rest private.

const names = require('./names.js');
const sayHi = require('./utils.js');
// dont need to assign it to a variable, can just use it directly
// ex1:
// require('./globals.js'); 
// this will run the code in globals.js

sayHi(names.vitor);
sayHi(names.pollyanna);
sayHi(names.wesley);
sayHi(names.anna);