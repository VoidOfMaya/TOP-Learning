



const analizeArr = (arr)=>{
    return{
        average: average(arr),
        min : min(arr),
        max: max(arr),
        length: arr.length,
    }

}
const average = (arr) =>{
    let sum = 0;
    arr.forEach(n => {
        sum = sum + n
    });
    return sum / arr.length  
}
const min = (arr)=>{
    let min
    for(let i = 0; i < arr.length; i++){
        if(min === undefined) min = arr[i];
        (arr[i] < min)? min =arr[i] : min = min;
    }
    return min;    
}
const max=(arr)=>{
    let max
    for(let i = 0; i < arr.length; i++){
        if(max === undefined) max = arr[i];
        (arr[i] > max)? max =arr[i] : max = max;
    }
    return max;
}


module.exports = analizeArr;