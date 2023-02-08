function calculate_Point(n) {
    let point = ""
    let player = []
    let computer = []

    for(i = 0; i < n; i++) {
        let OX = Math.ceil(Math.random() * 2)  
        player.push(OX)
    }

    for(i = 0; i < n; i++) {
        let OX = Math.ceil(Math.random() * 2)  
        computer.push(OX)
    }

    for(i = 0; i < n; i++) {
        if(player[i] === computer[i]) point += "1"
        else point += "0"
    }
}

let n = "10"
calculate_Point(n)