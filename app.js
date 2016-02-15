'use strict';

let maxPrime = 3;

const cp = require('child_process')
    , childCount = 10
    , childStore = []
    , primeStore = [ 2, 3 ]
    , killChildren = () => {
        childStore.forEach((child) => {
            child.kill();
        });
    };

childStore.length = childCount;
childStore.fill(1);

childStore.forEach((item, index) => {
    const child = cp.fork('./minion', [ 20, 5 + (index * 2) ]);

    child.on('message', (obj) => {
        primeStore.push(obj.prime);
        maxPrime = obj.prime > maxPrime ? obj.prime : maxPrime;

        if (primeStore.length === 2000) {
            process.stdout.write(`${maxPrime}`);
            killChildren();
            process.exit();
        }
    });

    childStore[index] = child;
});

process.stdin.resume();
