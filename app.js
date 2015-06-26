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
    , addString = '1'
    , primeCount = 0
    , startTime = new Date()

    , outputToScreen = function (timeToPrime, num) {
        'use strict';

        return function () {
            process.stdout.write('Current Max Prime!: ' + num + ' in ' + timeToPrime + ' ms\n');
        };
    }

    , findPrime = function () {
        'use strict';

        if(isPrime(counter, primeRegex)){
            primeCount++;
        }

        if(counter.length === 3) {
            addString = '11';
        }

        if(primeCount === 1000){
            primeCount = 0;
            process.nextTick(outputToScreen(new Date().getTime() - startTime.getTime(), counter.length));
        }

        counter += addString;

        process.nextTick(findPrime);
    };

findPrime();
