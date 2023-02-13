function get_Grade(arr) {
    let n = arr.length
    let answer = Array.from({length:n}, () => 1)
    console.log(answer);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[j] > arr[i]) {
                answer[i] += 1 
            }
        }
    }
    console.log(answer);
}

let arr = [87, 89, 92, 100, 76]
get_Grade(arr)