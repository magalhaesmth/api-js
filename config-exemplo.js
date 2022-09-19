"use strict";

class Config {
    static createConfig() {
        global.config = {
            porta: process.env.PORT || 3000,
            db: {
                name: "",
                url: "",
                username: "",
                password: ""
            }
        }
    }
}

module.exports = Config.createConfig()