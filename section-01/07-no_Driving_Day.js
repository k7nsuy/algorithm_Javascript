function noDrivingDay(arr) {
    let answer = []
    let count
    for(let i = 0; i < arr.length; i++) {
        let onlyDay = arr[i] % 10
        if(day === onlyDay) {
            count = answer.push(onlyDay)
        }
    }
    console.log(count);
}

let day = 3

arr = [25,23,11,47,53,17,33]
noDrivingDay(arr)