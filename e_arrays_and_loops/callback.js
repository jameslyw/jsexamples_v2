// using a promise object that takes in call back function to create a delay.

//const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
//await sleep(2000);

const sleep = (delay) => new Promise ((resolve) => setTimeout(()=> {
    console.log ("i'm sleeping for 2 seconds.");
    return resolve();
}, delay));
await sleep(2000);

// when using setTimeout, we are essentially applying a call back function as well
// after two seconds, setTimeout should run the callback fucntion with console.log

setTimeout(() =>{
    console.log("i've been waiting for 2 seconds");
}, 2000);