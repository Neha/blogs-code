const fs = require('fs');

// write file
fs.writeFile('logs.txt', 'hello', 'utf8', (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('data saved')
     }
});

// open file
fs.open('log2.txt', 'w', (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('file open')
     }
});

// append data
fs.appendFile('logs.txt', 'new text', 'utf8' , (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('data added')
     }
});

// read data
fs.readFile('logs.txt', (err,data) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log(data); // this will return buffer
      console.log(data.toString())
     }
});

// rename file
fs.rename('logs.txt', 'userlogs.txt', () => {
    console.log('done')
});

// delete file
fs.unlink('userlogs.txt', () => {
    console.log('deleted')
});