const parkingLot = {
    spots: 20,
    occupiedSpots: 0,
    perhour: 10
}

class ValidateParkentry {
    constructor(plate, type, entrytime) {
        if (parkingLot.spots > 0) {
            this.carDescription = { plate, type, entrytime }
            parkingLot.spots -= 1
            parkingLot.perhour += 2
        }
    }

}


const Car = new ValidateParkentry(1234, "onix", entryme)