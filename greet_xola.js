
// module.exports = function greet(firstName) {

//     return 'Hello '+ firstName;
    
// }
//  var greet = require('./greet');
//  console.log(greet('Xola'));
//  console.log(greet('Dikgang'));


// this should expost the function greet from  the file greet.js

// in should put/ import some color using chalk
import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)