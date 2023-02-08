function rock_scissors_paper(n) {
    let A = []
    let B = []
    
    for(let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * 3) + 1
        A.push(random)
    }

    for(let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * 3) + 1
        B.push(random)
    }

    for(let i = 0; i < n; i++) {
        if(A[i] > B[i]) console.log("A");
        else if(A[i] < B[i]) console.log("B");
        else console.log("D");
    }
}

let n = "5"
rock_scissors_paper(n)