function remove_someString(string) {
    let answer = "";
    for(let i = 0; i < string.length; i++) {
        if(string.indexOf(string[i]) === i) answer += string[i];
    }
    console.log(answer);
}

let string = "ksekkset"
remove_someString(string)