function output_HigherNumber01(given_Number, some_Number) {
    let answer = [];
    if(some_Number[0] > given_Number) answer.push(some_Number[0])
    for(let i = 0; i < some_Number.length; i++) {
        if(some_Number[i] < some_Number[i + 1]) answer.push(some_Number[i + 1]) 
    }
    console.log(answer);
}

let given_Number = "6"
let some_Number = [7,3,9,5,6,12]
output_HigherNumber01(given_Number, some_Number)