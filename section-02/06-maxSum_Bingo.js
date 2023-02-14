function maxSum_Bingo(arr) {
    let low_Sum = []
    let calumn_Sum = []
    let digonal_Sum_1 = []
    let digonal_Sum_2 = []
    let max = []
    for(let i = 0; i < arr[0].length; i++) {
        low_Sum.push(arr[i])
        digonal_Sum_1.push(arr[i][i])
        digonal_Sum_2.push(arr[i][4 - i])

        let result1 = low_Sum[i].reduce(function add(sum,currValue) {
            return sum + currValue;
        }, 0)

        max.push(result1)
        console.log(result1);
        
        let test = []
        
        for(let j = 0; j < arr[0].length; j++) {
            test.push(arr[j][i])
        }

        calumn_Sum.push(test)

        let result2 = calumn_Sum[i].reduce(function add(sum,currValue) {
            return sum + currValue;
        }, 0)
        
        max.push(result2)
        console.log(result2);

        let result3 = digonal_Sum_1.reduce(function add(sum,currValue) {
            return sum + currValue;
        }, 0)

        max.push(result3)

        let result4 = digonal_Sum_2.reduce(function add(sum,currValue) {
            return sum + currValue;
        }, 0)

        max.push(result4)
        
    }
    console.log(low_Sum);
    console.log(calumn_Sum);
    console.log(digonal_Sum_1);
    console.log(digonal_Sum_2);
    console.log(max);

    const max_Number = Math.max.apply(null, max)
    console.log(max_Number);
}


let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];

maxSum_Bingo(arr)