var primeRegex = /^1?$|^(11+?)\1+$/
    , isPrime = function (num, regex) {
        'use strict';

        return num.length > 1 && !(num.match(regex));
    }
    , counter = '1'
    , primeCount = 0;

// Start reading from stdin so we don't exit.
// process.stdin.resume();

while(true){
    if(isPrime(counter, primeRegex)){
        primeCount++;
    }

    if(primeCount === 1000){
        process.stdout.write('Current Max Prime!: ' + counter.length + '\n');
        primeCount = 0;
    }

    counter += '1';
}

// process.on('SIGINT', function() {
//   process.stdout.write('Got SIGINT.  Press Control-D to exit.');
// });

// process.on('SIGINT', function(){
//     var str = ' is not prime';

//     if(isPrime(counter, primeRegex)){
//         str = ' is prime';
//     }
//     console.log('last number checked: ' + counter + str);

//     process.exit();
// });
process.on('SIGINT', function () {
    'use strict';

    console.log('Primes found: ' + primeCount);
});
