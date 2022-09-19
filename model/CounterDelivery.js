"use strict";

const Mongoose = require("mongoose");

module.exports = class CounterDelivery extends Mongoose.Schema {
    constructor() {
        super({
            nome: String,
            veiculo: String,
            email: String,
            senha: String,
            permissoes: String,
            status: String,
            create_at: Date,
            access_at: Date,
            update_at: Date
        });
        Mongoose.model("Usuario", this);
    } 
}; 