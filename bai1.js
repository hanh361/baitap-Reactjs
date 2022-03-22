let arr = [0, 5, 4, 2, 8];
function sumArray(arr){
    let sum =0;
    for(i  = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(arr));