function check_oddNumber(arr) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 ) {
        if(min > arr[i]) min = arr[i] 
        sum += arr[i]
        }       
    } 
    console.log(min);
    console.log(sum);
}

arr = [2, 33, 6, 99, 4, 7]
check_oddNumber(arr)