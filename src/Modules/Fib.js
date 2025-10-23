/*===>23:10.2025: Fibonacci Recursive<===*/

/*
fib is 
*/
const fib = function (n){
    if( n <= 2){    
        return n = 1;
       
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(18));