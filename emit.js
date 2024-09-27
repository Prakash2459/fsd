const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const callbackFunction = (message) => {
  console.log(`Callback executed: ${message}`);
};

eventEmitter.on('myEvent', callbackFunction);

eventEmitter.emit('myEvent', 'Hello! This is an event-driven callback.');



const doTask = (taskName, callback) => {
  console.log(`Starting the task: ${taskName}`);
  
  setTimeout(() => {
    console.log(`${taskName} completed!`);
    callback();  
  }, 2000);
};

doTask('Download File', () => {
  console.log('All tasks done! Callback executed.');
});
