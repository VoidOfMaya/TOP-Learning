console.log(`running merge sort;`)
const array = [5,2,4,3,6,8,-1,7];


const mergeSort = function(arr, res = []){
    if(arr.length > 1){
        const A = arr.slice(0, arr.length/2);
        const B = arr.slice(arr.length/2, arr.length + 1);
        console.log(`first half: ${A}\nsecond Half: ${B}`);
        mergeSort(A);
        mergeSort(B);
        
    }
    return res
}

mergeSort(array);