//22.10.2025 computer science recursion practice
//Q1:sum all numbers

const sumRange= function(num){
    if(num <= 1){
        return 1
    }else{
        return num += (sumRange(num - 1));
    }
}

//Q2: power function
const power = function(number, exponent){
    if(exponent <= 0){
        return 1;
    }
    return number *=(power( number, exponent - 1));
}

//Q3: calculate factorial
/*sudo code
take number
if number = or < then 1
return nuber = 1
else number - 1 *= number */
const factorial = function (number){
    if( number < 1 ){
        return  1
    }
    return number *= factorial(number - 1) ;
}
//Q4: check all values in an array


//Q5: product of an array   
const arrProd = function (arr){
    if(arr.length <= 1){
        return 1
    }
    return arr[arr.length-1] * arrProd(arr.slice(0, arr.length -1));

}
//Q6: search js object
//sample object
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
var randoObj ={                 
                    magicNumber: 44,
                    something: 'foo2'
                }
//solution
/*
psudo code
get object  and value
check if object has 1 or more keys
if has one or more keys and type is not object
check if value equals our target value if
*/
const contains =(obj, value)=>{
    for(let key in obj){
        if(typeof obj[key] ==="object"){
            return contains(obj[key], value);
        }
        if(obj[key] === value){
            return true;
        }
    }
    return false
}
//Q7:
//example array : [ [[5], 3] , 0, 2, ['foo'], [], [4, [5, 6]]]
const totalNumbers = function (arr){
    let numbers = 0;
    Array.from(arr).forEach((item, index)=>{
        console.log(`item at index ${index} is: ${typeof item}`)
        if(Array.isArray(item)){
            console.log(`is array so open it up`);
            numbers+= totalNumbers(item);
            
        }
        if(typeof item === "number"){
            numbers += 1;
        }
    })
    return numbers
}
//Q8:
const sumSquare= function(arr){
    let result = 0;
    Array.from(arr).forEach(item=>{
        if (typeof item === "number"){
            result += item*item
        }else if(Array.isArray(item)){
            result +=(sumSquare(item));
        }
    })
    return result
}

//Q9;
const replicate = function(iteration, numberToRep){
    let result = [];
    if(iteration<= 0){
        return result;
    }else{
        result.push(numberToRep)
        result = result.concat(replicate(iteration-1, numberToRep));
        return result        
    }


}


const run =function(){
    //q1
        //console.log(sumRange(5));
    //q2
        //console.log(`exponent ${ power(2,4)}`);
    //q3
        //console.log(`factorial: ${factorial(5)}`);
    //q4
        //console.log(``);
    //q5
        //console.log(`array product: ${arrProd([1,2,3,10])} should return 60`);
    //q6
        //console.log(` ${contains(nestedObject, "foo2")}`);
    //q7
        //console.log(`total numbers: ${totalNumbers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])}`);
    //q8
        //console.log(`square sum : ${sumSquare([10,[[10],10],[10]])}`);
    //q9
        console.log(`array: ${replicate(-2 , 6)}`);
}



export{
    run,
}