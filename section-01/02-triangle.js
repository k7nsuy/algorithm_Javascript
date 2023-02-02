function check_Triangle(a,b,c) {
    let answer = "YES", highest_Number;
    let total = a + b + c
    if(a > b) highest_Number = a
    else highest_Number = b
    if(c > highest_Number) highest_Number = c 
    if(total - highest_Number <= highest_Number) answer = "NO"

    console.log(answer);
}

check_Triangle(1,2,3)