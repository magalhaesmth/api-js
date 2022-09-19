"use strict";

require("./config-exemplo");

const express = require("express");
const cors = require("cors");
const { json } = require("express");
const CounterDeliveryRoute = require("./routes/CounterDeliveryRoute")
const UserRoute = require("./routes/UserRoute");
const Connection = require("./connection/Connection");
const porta = process.env.PORT || 3000;

class App {
    static async init() {
        let app = new express();
        app.use(cors());

        try{
            console.log("Obtendo conexão com o banco de dados...");
            await Connection.obterConexao();
            console.log("Banco conectado com sucesso!")
        } catch (error){
            console.log(
                `Erro aoa conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }

        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "API-JS",
                version: "1.0.1",
                description: "Projetinho em desenvolvimento na matéria de Construção de Software",
                author: "Matheus Magalhães Urbano"
            })
        })

        app.get("/ping", (req, res)=>{
            res.json({"Resposta":"pong"})
        })

        app.listen(porta, () => {
            console.log(`Servidor Inicializado: ${porta}`)
        })
        new CounterDeliveryRoute(app)
        new UserRoute(app)
    }
}
App.init();
