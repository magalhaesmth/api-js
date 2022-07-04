const CounterController = require("../controllers/CounterController")

module.exports = class CounterRoute{
    constructor(app){
        app.route("/counter").get(CounterController.getCounter);

        app.route("/counter/increment").post(CounterController.increment);

        app.route("/counter/decrement").post(CounterController.decrement);
    }
}