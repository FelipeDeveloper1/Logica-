function ValidCreditCard(digits) {

    const cardNumber = digits.toString().split('')
    let finalNumber = []
    finalNumber = cardNumber.map((num) => num * 2 > 9 ? num * 2 - 9 : num)
    console.log(finalNumber)
    const totalSum = finalNumber.reduce((accumulator, element) => {
        return accumulator + element
    })
    console.log(totalSum)
    const nums = [1, '5', 10, '10']
    let total = nums.reduce((accumulator, element) => {
        return accumulator + element
    })
    console.log(total)
}



ValidCreditCard(4539578763621486)