// function ValidCreditCard(digits) {
//     const cardNumber = digits.toString().split('')
//     let finalNumber = []
//     finalNumber = cardNumber.map((num) => num * 2 > 9 ? num * 2 - 9 : parseInt(num))
//     let totalValue = finalNumber.reduce((accumulator, element) => {
//         return accumulator + element
//     })
//     console.log(totalValue)
//     if (totalValue % 10 == 0) {
//         console.log("valid card")
//     } else {
//         console.log("invalid card")
//     }


// }


// ValidCreditCard(1234567812345670)



// correct form 
function creditCard(card) {
    // format to string

    let cardnumber = card.toString().split('').reverse()
    let doublingElement = cardnumber.map((num, index) => {
        if (index % 2 == 1) {
            return num * 2 > 9 ? num * 2 - 9 : num * 2
        } else {
            return parseInt(num)
        }
    })
    let finalcard = doublingElement.reduce((accumulator, element) => {
        return accumulator + element
    })
    const validation = () => {
        return finalcard % 10 == 0 ? "valid card" : "invalid card"
    }
    console.log(finalcard)

    console.log(validation())
}





creditCard(4539578763621486)