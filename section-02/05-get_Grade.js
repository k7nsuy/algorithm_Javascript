function get_Grade(arr) {
    let answer;
    let number
    for(let i = 0; i < arr.length; i++) {
        number = arr.indexOf(arr[i])
        answer = arr.sort(function(a,b) {
            return b - a
        })
    }
    console.log(answer);
    console.log(number);
}

let arr = [87, 89, 92, 100, 76]
get_Grade(arr)