function theLongestString(count, someString) {
    let arr = []
    let arrString = []
    let longest
    for(let i = 0; i < count; i++) {
        arr.push(someString[i].length)
        arrString.push(someString[i])
        let max = Math.max.apply(null, arr)
        if(someString[i].length === max) {
            longest = someString[i]
        }
    }
    console.log(longest);
}

let someStrings = ["teacher",
    "time",
    "student",
    "beautiful",
    "good"]

let count = someStrings.length
theLongestString(count,someStrings)