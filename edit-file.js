'use strict';

var fs = require('fs');
var filename = './files/test.txt';
var faker = require('faker');
var firstRandom = faker.random.number();
// let testFile = module.exports = {};


fs.readFile(filename, (err, data) => {
  if ( err ) throw err;
  let actualContents = data.toString().trim(); 
  console.log(actualContents);
});

fs.writeFile(filename, firstRandom, () => {});

// const rfp = util.promisify(fs.readFile);
// rfp('./files/test.txt')
//   .then( data => console.log('From Promise', data.toString().trim()) )
//   .catch( error => console.error(error) );

// testFile.read('./files/test.txt');

// fs.readFile(path, (err, data) => {
//   if ( err ) { throw err; }
//   let actualContents = data.toString().trim(); 
//   console.log(actualContents);
// });