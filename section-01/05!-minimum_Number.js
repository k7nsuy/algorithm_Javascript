function minumum_Number(arr) {
    let answer, min_Num = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min_Num) min_Num = arr[i]
    }
    answer = min_Num
    console.log(answer);
}

let arr = [2,12,22,33,44,55]
minumum_Number(arr)