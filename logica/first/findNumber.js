// given an array with numbers from 1 to N, but one is missing, find the missing one

let findNumber = (arr) => {
    let num = Math.max.apply(null, arr)
    let diferent = []
    for (let i = 1; i < num; i++) {
        if (arr.includes(i) == false) {
            diferent.push(i)
        }
    }
    console.log(diferent)


}


findNumber([2, 4, 6, 10])