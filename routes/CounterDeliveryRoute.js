const CounterDeliveryController = require("../controllers/CounterDeliveryController")

module.exports = class CounterDeliveryRoute{
    constructor(app){
        app.route("/counterdelivery").get(CounterDeliveryController.getCounter);
        app.route("/counterdelivery").post(CounterDeliveryController.save); 
    }
}