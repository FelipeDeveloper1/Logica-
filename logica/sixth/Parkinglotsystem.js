const hour = new Date()


const parkingLot = {
    spots: 5,
    perhour: 10,
    time: hour.getHours()
}

class ValidateParkentry {
    constructor(plate, type, entrytime) {
        if (parkingLot.spots > 0) {
            this.carDescription = { plate, type, entrytime, pending: "none" }
            parkingLot.spots -= 1
            this.carDescription.status = "in"
            console.log(this.carDescription)

        } else {
            console.log("there's no much spots for now")
        }

        this.leave = () => {
            if (this.carDescription.status == "out") {
                console.log("you already outside")

            } else {
                parkingLot.spots += 1
                this.carDescription.status = "out"
                const timing = parkingLot.time -= this.carDescription.entrytime
                this.carDescription.pending = timing * parkingLot.perhour
                console.log(`you need pay: ${this.carDescription.pending} dolars`)
            }
        }

    }

}

const entry = () => {
    return Math.floor(Math.random() * hour.getHours())
}
const car1 = new ValidateParkentry(1234, "onix", entry())
    // car1.leave()
const car2 = new ValidateParkentry(203, "ferrari", entry())
car2.leave()