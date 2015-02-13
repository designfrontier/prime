var primeRegex = /^1?$|^(11+?)\1+$/
    , isPrime = function (num, regex) {
        var one = '1'
            , i = 0
            , testString = '';

        for(i = 0; i < num; i++){
            testString += one;
        }

        return !(testString.match(regex));
    }
    , counter = 0
    , primeCount = 0;

// Start reading from stdin so we don't exit.
// process.stdin.resume();

while(true){
    if(isPrime(counter, primeRegex)){
        primeCount++;
    }

    if(primeCount === 1000){
        process.stdout.write('Current Max Prime!: ' + counter + '\n');
        primeCount = 0;
    }

    counter++;
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