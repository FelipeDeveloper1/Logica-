const Filtername = function() {
        let names = ["felipe", " Max ", "FIONA", "Saphira", "FELIPE"]
        this.names = names
        let CleanNames = []
        this.callNames = () => {
            names.forEach((value) => {
                if (!CleanNames.includes(value.toLowerCase())) {
                    CleanNames.push(value.toLowerCase())
                }
            })
            console.log(CleanNames)
        }
    }
    // console.log(CleanNames)




let Forms = new Filtername()
Forms.callNames()