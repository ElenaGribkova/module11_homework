console.log('task 2');

var n = 67;
var m = Math.sqrt(n);
var isPrime = true;
for (var i = 2; i <= m; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    document.write(n + ' - Prime number<br/>');
} else {
    document.write(n + ' Is not prime number<br/>');
}