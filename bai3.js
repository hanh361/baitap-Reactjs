const array1 = ['John', 'Pete', 'Mary'];
const array2 = ['Mary', 'Henry', 'Harry'];
const array = array1
    for(let i=  0; i<array2.length; i++){
        if(array.includes(array2[i]) !== true){
             array.push(array2[i]);
        }
        
    }
console.log(array);