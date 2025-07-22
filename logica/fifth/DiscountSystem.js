const cart = [100, 100]
const discounts = [
    { name: "percent", value: 10, minspend: 200 }, // 20R$ off if total >= 200 
    { name: "flat", value: 30, minspend: 250 }, //30R$ off if total >= 250
]

function Getfinalprice(cart, discounts) {
    this.product = { cart, discounts }

    const discountapply = (value, discount) => {
        return value - value * discount / 100
    }

    this.calculate = () => {
        let value = this.product.cart.reduce((accumulator, element) => {
            return accumulator + element
        })
        if (value < 200) {
            console.log(value)
        } else {
            return value >= 250 ?
                discountapply(value, this.product.discounts[1].value) :
                discountapply(value, this.product.discounts[0].value)
        }


    }

}
const price = new Getfinalprice(cart, discounts)
console.log(price.calculate())