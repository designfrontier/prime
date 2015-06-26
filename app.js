var primeRegex = /^1?$|^(11+?)\1+$/
    , isPrime = function (num, regex) {
        'use strict';
        var len = num.length;

        if(len === 2){
            return true;
        } else if(len % 2 === 0){
            return false;
        } else {
            return len > 1 && !num.match(regex);
        }
    }
    , counter = '1'
    , primeCount = 0
    , startTime = new Date()
    , timeToPrime
    , addString = '1'

    , findPrime = function () {
        'use strict';

        if(isPrime(counter, primeRegex)){
            primeCount++;
        }

        if(counter.length === 3) {
            addString = '11';
        }

        if(primeCount === 1000){
            timeToPrime = new Date().getTime() - startTime.getTime();
            process.stdout.write('Current Max Prime!: ' + counter.length + ' in ' + timeToPrime + 'ms\n');
            primeCount = 0;
        }

        counter += addString;

        findPrime();
    };

findPrime();
