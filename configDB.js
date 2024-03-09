const mongoose = require('mongoose');

const dbConnect = () => {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
        console.error("DB_URL environment variable is not set.");
        return;
    }

    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => {
        console.log('Connected to DB');
    }).catch(error => {
        console.error('Error connecting to DB:', error);
    });
}

module.exports = dbConnect;
