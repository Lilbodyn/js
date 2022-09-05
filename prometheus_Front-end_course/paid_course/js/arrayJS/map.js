const arr = [1, 2, 3];
const coef = 1.5;
const result = arr.map(function(item, index, array){
    return {
        i: index,
        value: item
    }
});