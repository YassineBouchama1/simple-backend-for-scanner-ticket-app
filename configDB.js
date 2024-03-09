const mongoose = require('mongoose')

const dbConnect = () => {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
        console.error("DB_URL environment variable is not set.");
        return;
    }
    mongoose.connect('mongodb+srv://siskodb:sisko007SP@cluster0.2pdvdr6.mongodb.net/scannertickets?retryWrites=true&w=majority')
        .then(() => {
            console.log('Conected DB')
        }).catch(() => {

            console.log('Pb In Conect DB')
        })
}

module.exports = dbConnect