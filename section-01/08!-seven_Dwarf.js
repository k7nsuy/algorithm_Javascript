function sevenDwarf(arr) {
    let answer = arr
    let sum = 0
    for(let k = 0; k < arr.length; k++) {
        sum += arr[k]
    }

    for(let i = 0; i < arr.length; i++) {
        console.log("Number 1: "+ answer[i]);
        for(let j = i + 1; j < arr.length; j++) {
            if(sum - (answer[i] + answer[j]) == 100) {
                answer.splice(i, 1)
                answer.splice(j, 1)
            }
        }
    }
    console.log(answer);
}

arr = [20,7,23,19,10,15,25,8,13]
sevenDwarf(arr)