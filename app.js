'use strict';


require('lightrun').start({
  lightrunSecret: 'b0ec4ae2-e711-4ad5-98d9-f2ac028c093e',
  capture: {includeNodeModules:true},
  company: 'yanivshani',
});

const os = require("os");
const hostname = os.hostname();
const express = require('express');

console.log('os.hostname()='+os.hostname());
console.log('process.version='+process.version);
console.log('process.version='+process.platform);
console.log('os.release()='+os.release());


// Constants
const PORT = 8083;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`${ new Date().toISOString() }: Hello from ${ hostname } demo for NodeJS`);

});

app.listen(PORT);
console.log('Server up and running');

const MAX_NUMBER = 10 ** 9;
let cnt = 0

function isPrime(num) {
    if (num === 2) {
        return true;
    }
    if (num < 2 || num % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

async function countPrimes(i) {
    if (isPrime(i)) {
        cnt++;
        await sleep(1000);
    }
    if (i < MAX_NUMBER) {
        setTimeout(() => countPrimes(++i));
    } else {
        console.log("Total number of primes: " + cnt);
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
console.log("Starting to count prime numbers...");

setTimeout(() => countPrimes(2));
