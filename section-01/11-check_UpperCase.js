function checkUpperCase(someString) {
    let check_UpperCase = someString.match(/[A-Z]/g)
    console.log(check_UpperCase.length);
}

let someString = "KoreaTimeGood"
checkUpperCase(someString)