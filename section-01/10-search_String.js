function search_String(some_Letters,specified_String) {
    let sentences = [...some_Letters] // String => Array
    let count = []
    for(let i = 0; i < some_Letters.length; i++) {
        if(sentences[i] === specified_String) {
            count.push(sentences[i])
        }
    }
    console.log(count.length);
}

some_Letters = "COMPUTERPROGRAMMING"
specified_String = "R"
search_String(some_Letters,specified_String)