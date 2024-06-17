const mongoose = require("mongoose");

const connection_db = process.env.database;

mongoose
    .connect(connection_db)
    .then(() => {
        console.log(`Mongo DB Connected `);
    })
    .catch((error) => {
        console.log(`Error found : ${error}`);
    });

module.exports = connection_db;
