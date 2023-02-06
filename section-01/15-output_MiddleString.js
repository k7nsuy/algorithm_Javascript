function output_MiddleString(someWord) {
    let middleString
    let middleOutput = Math.floor(someWord.length / 2)
    middleString = someWord[middleOutput]
    if(Math.floor(someWord.length) % 2 === 0) console.log(`${someWord[middleOutput-1]}${middleString}`);
    else console.log(middleString);
}


let someWord = "grandmother"
output_MiddleString(someWord)