console.log(`running merge sort;`)
const array = [105, 79, 100, 110];


const mergeSort = function(arr){
    if(arr.length <= 1){
        return arr;
    }else{
        const A = arr.slice(0, arr.length/2);
        const B = arr.slice(arr.length/2, arr.length);
        return merge(mergeSort(A), mergeSort(B));     
    }
}
const merge = function (A, B){
    let k =[];
    let Ai = 0;
    let Bi = 0;
    while(Ai < A.length && Bi < B.length){
        if(A[Ai]< B[Bi]){
            k.push(A[Ai]);
            Ai++;
        }else{
            k.push(B[Bi]);
            Bi++;
        }
    }
    while (Ai < A.length) {
        k.push(A[Ai]);
        Ai++;
    }
    while (Bi < B.length) {
        k.push(B[Bi]);
        Bi++;
    }
    return k
}
console.log(`sorted data: ${mergeSort(array)}`);
console.log(`original data: ${array}`)