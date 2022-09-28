//28/09//2022
// Events
// 1. Event-Driven Programming
// 2. Used Heavily in Node.js

const EventEmitter = require('events'); // Events module

const customEmitter = new EventEmitter(); // object, instance,  on - listen for an event, emit -emit an event

customEmitter.on('response', (name, age) => {  // when the event takes place the callback function starts
    console.log(`data recieved user ${name} with the age : ${age}`);
}); 

//customEmitter.emit('response'); // order is important
customEmitter.emit('response', 'jhon', 34); // recieve param


customEmitter.on('response', () => {  // when the event takes place the callback function starts
    console.log(`soem other logic here `);
}); 

