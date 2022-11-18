const Buffer = require('buffer');

// create buffer
const buffer1 = Buffer.alloc(10);

console.log(buffer1);

// create buffer
const buffer2 = Buffer.from('hello');

console.log(buffer2);

// convert to string buffer
console.log(buffer2.toString());


// convert to JSON
console.log(buffer2.toJSON());

// length
console.log(buffer2.length);

// copy
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(10);

buf1.copy(buf2);

console.log(buf1.toString());

// fill
const buf3 = Buffer.alloc(10);
buf3.fill('a');

console.log(buf3.toString());


// write
const buf4 = Buffer.from('neha');
buf4.write('hello', 5);

console.log(buf4.toString());
