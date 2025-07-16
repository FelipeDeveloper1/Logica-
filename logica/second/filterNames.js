const Filtername = function() {
    let names = ["max ", "felipe", " Max ", "    FIONA  ", "Saphira", "   FELIPE   ", "max "]
    let CleanNames = []
    this.callNames = () => {
        names.forEach((value) => {
            if (!CleanNames.includes(value.toLowerCase().trim())) {
                CleanNames.push(value.toLowerCase().trim())
            }
        })
        console.log(CleanNames.sort())
    }
}




let Forms = new Filtername()
Forms.callNames()