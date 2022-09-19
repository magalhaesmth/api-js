const CounterDeliveryService = require("../services/CounterDeliveryService")


module.exports = class CounterController{
    static async getCounter(req, res){
        res.status(200).send(CounterDeliveryService.getCounter())
    }

    static async increment(req, res) {
        res.status(200).send(CounterDeliveryService.save(req.body))
    }
}