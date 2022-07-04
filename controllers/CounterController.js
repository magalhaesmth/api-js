const CounterService = require("../services/CounterService")


module.exports = class CounterController{
    static async getCounter(req, res){
        res.status(200).send(CounterService.getCounter())
    }

    static async increment(req, res) {
        res.status(200).send(CounterService.increment())
    }

    static async decrement(req, res) {
        res.status(200).send(CounterService.decrement())
    }
}