const fs = require('fs');
const fsPromises = fs.promises;

// write file
(async function(){
    try {
      const filehandle = await fsPromises.writeFile('userlogs.txt', 'system logs...','utf8');
      console.log('file created')
    } 
    catch(err){
      console.log(err)
    }
  }());

// read file
(async function(){
    try {
      const filehandle = await fsPromises.readFile('logs.txt', 'utf8');
      console.log(filehandle)
    } 
    catch(err){
      console.log(err)
    }
  }());

// append file
(async function(){
    try {
      const filehandle = await fsPromises.appendFile('logs.txt', 'New logs', 'utf8');
      console.log(filehandle)
    } 
    catch(err){
      console.log(err)
    }
  }());
  
  

// open file

(async function(){
    try {
      const filehandle = await fsPromises.open('logs.txt', 'w');
      console.log('file open')
    } 
    catch(err){
      console.log(err)
    }
  }());


// rename file
(async function(){
    try {
      const filehandle = await fsPromises.rename('logs.txt', 'userlogs.txt');
      console.log('File name updated')
    } 
    catch(err){
      console.log(err)
    }
}());

// delete file
(async function(){
    try {
      const filehandle = await fsPromises.unlink('userlogs.txt');
      console.log('File deleted')
    } 
    catch(err){
      console.log(err)
    }
}());
