/*===>23:10.2025: Fibonacci Recursive<===*/

/*
fib is 
*/
const fibIter =function (n){
    let arr = [];
    for(let i = 0; i >= n; i++){
        let res = 0;
        if(res <= 2 ){
            res = 1    
            arr.concat(res);
        }
        arr.concat((res-1)+(res-2));
    }
    return arr
}
/*
const fibRec = function (n){

    if( n <= 2){    
        return n = 1;
       
    }
    return fib(n-1) + fib(n-2);
}
    */

console.log(`itretive : ${fibIter(18)}`);
//console.log(`Recursive: ${fibRec(18)}`);