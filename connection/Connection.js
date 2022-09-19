"use strict";

const mongoose = require("mongoose");

class Connection {
    static async getConnection() {
        let url;
        let { db } = global.config
        let options = {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 29999
        };

        if (!db.username && !db.password)
            url = `mongodb://${db.url}/${db.name}`;
        else
            url = `mongodb+srv://${db.username}:${db.password}@${db.url}/${db.name}?retryWrites=true&w=majority`;

        return mongoose.connect(url, options);
    }
}

module.exports = Connection;