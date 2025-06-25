const Filtername = function() {
        let names = ["felipe", " Max ", "    FIONA  ", "Saphira", "   FELIPE   "]
        let CleanNames = []
        this.callNames = () => {
            names.forEach((value) => {
                if (!CleanNames.includes(value.toLowerCase().trim())) {
                    CleanNames.push(value.toLowerCase().trim())

                }
            })
            console.log(CleanNames)
        }
    }
    // console.log(CleanNames)




let Forms = new Filtername()
Forms.callNames()