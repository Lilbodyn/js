const arr = [1, 2, 3];
const coef = 1.5;
const result = [];

/* for(let i = 0; i < arr.length; i++){
    result.push(arr[i] * coef)
}

 for ( let item of arr){
    result.push(item * coef)
} */

arr.forEach(function(item) {
    result.push(item * coef)
});

console.log(result)