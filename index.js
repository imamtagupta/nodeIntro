console.log('hello world 👋');
global.mynum = 23;
global.mynum++;
console.log(global.mynum);
// The most important global you should be familiar with is process
console.log(process.platform)
console.log(process.env.USER)

// In most of the cases you listen to events
// 1) callback functions

process.on('exit', function(){
    // do Something;
    console.log('callback event') 
})
// here when exit event occurs the function callbacks

// 2) through even emitter

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
 
eventEmitter.on('lunch', () => {
    console.log('yum 🍰')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// filesystem can be handled in nodejs with both blocking and non-blocking technique
// 1)

const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf-8')
console.log('txt1 : ', txt)
console.log('do this ASAP')

// TIP: whenever there is sync === blocking
// because they will have to finish all of their work before 
// any of your other code

// CONCLUSION : 2nd console printer only after reading file


// now luckily we can make our code non blocking
// using callback

// 2)
readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log('txt2: ',txt);
});
console.log('do this ASAP2');

// 3) Using promise
const {readFile1} = require('fs').promises;

async function hello(){
   const file =  await readFile1('./hello.txt', 'utf-8');
}

// MODULES::
// module is nothing but a js file which exports its code 
// node suppors multiple common js modules => require()
// but recently it added support to ES module => import/export

const myModule = require('./my-module')
console.log(myModule);