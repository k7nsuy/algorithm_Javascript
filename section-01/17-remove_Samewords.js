function remove_Samewords(length, some_Words) {
    let answer = "";
    for(let i = 0; i < length; i++) {
        if(some_Words.indexOf(some_Words[i]) === i) answer += some_Words[i]+" "
    }
    console.log(answer); 
    

}

let some_Words = ["good",
"time",
"good",
"time",
"student"]
let length = some_Words.length
remove_Samewords(length, some_Words)