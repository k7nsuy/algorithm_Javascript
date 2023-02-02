function minimum_Number(a,b,c) {
    let min_Num, answer;
    if(a < b) min_Num = a
    else if (b > a) min_Num = b
    if(c < min_Num) min_Num = c
    answer = min_Num

    console.log(answer);
}

minimum_Number(9,18,27)