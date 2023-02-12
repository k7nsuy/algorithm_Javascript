function calculate_Point(arr) {
    let answer = 0;
    let count = 0;
    for(let x of arr) {
        if(x === 1) {
            count++;
            answer += count
        } else {
            count = 0;
        }
    }
    console.log(answer);
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
calculate_Point(arr)