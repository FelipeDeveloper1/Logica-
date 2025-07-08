const costumer = [
    { name: "pc", price: 5000, quantity: 2 },
    { name: "keyboard", price: 250, quantity: 2 },
    { name: "mouse", price: 100, quantity: 3 },
    { name: "pc", price: 5000, quantity: 1 }

]

function Calculate() {
    let products = []
    let price = 0

    this.totalizer = () => {
        costumer.forEach((value) => {
            if (!products.includes(value.name)) {
                products.push(value.name)
            }
            price += value.price * value.quantity
        })
        insert(price, products)
    }
    const insert = (price, products) => {
        const FormatCostumer = { price, products }
        console.log(FormatCostumer)
    }
}

let process = new Calculate()
process.totalizer()