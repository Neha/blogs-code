
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9b8gpjhvkrc9cevzybc5.png)

## Summary
1. NodeJS has `fs` module that helps in managing files

2. 'fs' module has Promise API, Callback API, and Synchronous API.

3. There are various methods in `fs` from creating, to deleting the files.

4. Always use Async methods over sync for improving performance unless and until you have requirements to use sync methods.

--- 

Welcome back to my 2nd blog from the series of NodeJS. If you haven't checked my 1st blog, please check [here](https://dev.to/hellonehha/nodejs-series-1aam).

Today we will explore the 2nd module (in-built package) of NodeJS - `fs` (file system).

We have 3 ways to use `fs` module in NodeJS:

1. Promise API

2. callback API

3. Synchronous API

|      | import | mode |  return | 
| ----------- | ----------- | -------- | -------- |
| Promise      | node:fs/promises | promise based (async) |  promise |
| Callback   | fs    | async | error/success or data |
| Synchronous   | fs     | sync | error/success or data |


In this tutorial we will go through the Callback.

## What is fs?

NodeJS has native or built-in package `fs`. FS stands for filesystem. FS enables devs to create, open, read and write files. 

This is an important feature. Developers can do a lot by using FS. Developers will have control over the files.

## Where to Use?

1. `fs` in configurations. 

2. Build Scripts

3. Temporary data storage

4. Processing of data before storing in database

## How to create a file?


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hnxql4aiqb9c2u9n044.png)

There are 3 ways (methods) to create a new file:

1. `open`: open an existing file.

2. `writeFile`: it will create a file if it's not exist and write content in it.

3. `appendFile`: it will create a file if it's not exist and append content in it.

## How to write content in a file?

1.  writeFile

- file name

- data

- options: encoding, mode, flag

- callback: error or success

```JAVASCRIPT
// Example: Callback API
const fs = require('fs');

fs.writeFile('logs.txt','hello', 'utf8' (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('data saved')
     }
});

// Example: Promise API

import { writeFile } from 'node:fs/promises';

(async function main() {
    try {
        await writeFile(
                "logs.txt",'hello')
  
        console.log("The written file has"
            + " the following contents:");
  
    } catch (err) {
        console.error(err);
    }
})();

```
2 . open

- file name

- mode

- callback: error or success

```JAVASCRIPT
const fs = require('fs');

// Callback API
fs.open('logs.txt', 'w', (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('file open')
     }
});

// Promise API
import { open } from 'node:fs/promises';

(async function main() {
    try {
        await open(
                "logs.txt")
  
        console.log("The file has been open");
  
    } catch (err) {
        console.error(err);
    }
})();
```
3 .  appendFile

- file name

- data

- options: encoding, mode, flag

- callback: error or success

```JAVASCRIPT
// callback API
fs.appendFile('logs.txt', 'new text', 'utf8' , (err) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log('data added')
     }
});

// Promise API
import { appendFile } from 'node:fs/promises';

(async function main() {
    try {
        await appendFile("logs.txt", 'hello');
        console.log("The file has been open");
  
    } catch (err) {
        console.error(err);
    }
})();
```

## How to read content from a file?

So far we saw how to create and write content to a file. We can also read the file's content.

## read

- file name

- encoding options: utf8, utf16, base ,etc.

- callback: error or data

```JAVASCRIPT
fs.readFile('logs.txt', (err,data) => {
    if(err) {
      console.log('error')
     }
    else{
      console.log(data); // this will return buffer
      console.log(data.toString()); // convert the buffer to string
     }
});
```


## Code:

```JavaScript 
// import package

const fs = require('fs')

// read a file

const readfile = fs.readFile('logs.txt', 'utf-8');
console.log(readfile);

// write content of a file

const writefile = fs.writeFile('logs.txt', 'hello');
const readfile = writefile.readFile(writefile)
console.log(readfile);

// append content

const readfile = fs.appendFile('logs.txt', 'utf-8');
console.log(readfile);

// rename

const logs = fs.createFile('logs.txt');

fs.rename('logs.txt', 'userlogs.txt', () => {
    console.log('done')
});

// delete

const logs = fs.createFile('logs.txt');

fs.unlink('logs.txt', () => {
    console.log('deleted')
});

```

## Important

1. Content in the file would be either string, buffer, or text. Not, object 

2. writeFile will overwrite the content. Hence, use appendfile

## sync vs async

You will see that there are 2 methods in `fs`: `readfile` and `readFileSync`. `readFile` is async operation. It's a blocking operation and will impact the performance. Hence, prefer to use `readFile` over `readFileSync` unless and until you don't have any requirement.

## [Code](https://github.com/Neha/blogs-code/blob/master/nodejs-module/fs-demo.js)

## Resources

[NodeJS Documentation](https://nodejs.org/api/fs.htm)



Like it? Do follow me on [Twitter](https://twitter.com/hellonehha) and [Linkedin](https://www.linkedin.com/in/nehha/).