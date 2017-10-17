module.exports = function (max, size) {
    let arr = [];
    for (let i = 0; i < size; i++){
        let nextValue
        do{
            nextValue = Math.floor(Math.random() * max);
        } while(arr.includes(nextValue))
        arr[i] = nextValue;
    }
    return arr;
}