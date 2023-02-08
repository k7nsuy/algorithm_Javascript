function higherNumber02(some_Number) {
    let answer = [];
    for(let i = 0; i < some_Number.length; i++) {
        if(some_Number[i] < some_Number[i + 1]) answer.push(some_Number[i + 1])
    }
    console.log(answer.length);
}

let some_Number = [130 ,135 ,148 ,140 ,145 ,150 ,150 ,153]
higherNumber02(some_Number)