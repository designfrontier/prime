'use strict';

const primeRegex = /^1?$|^(11+?)\1+$/
    , increment = process.argv[2]
    , start = process.argv[3]
    , isPrime = function (num, regex) {
        const len = num.length;

        if (len === 1) {
            return false;
        }

        if (len === 2 || len === 3) {
            return true;
        }

        return !num.match(regex);
    }

    , findPrime = function (counter, addString) {
        if (isPrime(counter, primeRegex)) {
            process.send({ prime: counter.length });
        }

        process.nextTick(() => {
            findPrime(counter + addString, addString);
        });
    }

    , arr = []
    , incrementArr = [];

arr.length = start;
arr.fill('1');
incrementArr.length = increment;
incrementArr.fill('1');

process.on('message', (msg) => {
    if (msg === 'done') {
        process.exit();
    }
});

findPrime(arr.join(''), incrementArr.join(''));
