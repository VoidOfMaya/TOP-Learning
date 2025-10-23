/*===>23:10.2025: Fibonacci Recursive<===*/

/*
fib is 
*/
const fibIter =function (n){
    let arr = [];
    let a = [0, 1];
    for(let i = 0; i < n; i++){
        arr.push(a[0]);

        let temp = a[0] + a[1];
        a[0] = a[1];
        a[1]= temp;
    }
    return arr
}

const logFib = function(n, arr = []){
    if (n === 0) return arr;
    logFib(n-1, arr)
    arr.push(fib(n-1));
    return arr;
}
const fib = function (n){
    if(n === 0) return n = 0;
    if( n < 2)  return n = 1;
    return fib(n-1) + fib(n-2);
}

console.log(`itretive : [${fibIter(8)}]`);
console.log(`Recursive: [${logFib(8)}]`);