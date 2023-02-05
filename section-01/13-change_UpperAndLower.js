function changeUpperAndLower(sentences) {
    let answer = []
    for(let i = 0; i < sentences.length; i++) {
        let x = sentences[i]
        if(x === x.toUpperCase()) x = x.toLowerCase()
        else x = x.toUpperCase()
        answer.push(x)
    } 
    console.log(answer.join(''))
}

let sentences = "StuDY"
changeUpperAndLower(sentences)
