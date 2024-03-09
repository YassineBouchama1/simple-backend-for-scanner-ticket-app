const mongoose = require('mongoose')

const dbConnect = () => {
    mongoose.connect('mongodb+srv://siskodb:sisko007SP@cluster0.2pdvdr6.mongodb.net/scannertickets?retryWrites=true&w=majority')
        .then(() => {
            console.log('Conected DB')
        }).catch(() => {

            console.log('Pb In Conect DB')
        })
}

module.exports = dbConnect