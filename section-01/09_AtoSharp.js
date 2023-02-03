function AtoSharp(banana) {
    let split = banana.split('')
    let sharp = []
    let string
    for(let i = 0; i < split.length; i++) {
        if(split[i] === 'A') split[i] = split[i].replace('A','#')
        sharp.push(split[i])
    }
    string = sharp.join('')
    console.log(string);
}

let banana = "BANANA"
AtoSharp(banana)