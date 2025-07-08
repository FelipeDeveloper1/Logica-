function ValidCreditCard(digits) {

    const cardNumber = digits.toString().split('')
    let finalNumber = []
    finalNumber = cardNumber.map((num) => num * 2 > 9 ? num * 2 - 9 : parseInt(num))
    console.log(finalNumber)

    const sum = (accumulator, element) => {
        // return accumulator + element
    }
    let total = finalNumber.reduce(sum)
        // console.log(total)
}


ValidCreditCard(4539578763621486)