
// module.exports = function greet(firstName) {

//     return 'Hello '+ firstName;
    
// }
//  var greet = require('./greet');
//  console.log(greet('Xola'));
//  console.log(greet('Dikgang'));


// this should expost the function greet from  the file greet.js

import figlet from 'figlet';
// in should put/ import some color using chalk
import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'


// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage);

//using figlet to create a greeting using ASCII art 
figlet(greet('xola'), function(err, data) {


    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    //should print Hello Xola with background of green and written in back on the console
    console.log(chalk.bgGreen.black(data))
});