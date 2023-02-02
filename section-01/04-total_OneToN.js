function total_OneToN(n) {
    let answer = 0;
    for(let i = 1; i < n + 1; i++) {
        answer = answer + i
    }
    console.log(answer);
}

total_OneToN(10)