function maxSum_Bingo(arr) {
    for(let i = 0; i < arr[0].length; i++) {
                
        for(let j = 0; j < arr[0].length; j++) {
            console.log(arr[j][i]);
        }
        
    }
}


let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];

maxSum_Bingo(arr)