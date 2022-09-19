const UserController = require("../controllers/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user")
            .get(UserController.findAll)
            .post(UserController.create)
            .put(UserController.update)
            .delete(UserController.delete)
            
        app.route('/usuarios/:idUsurio').get(UserController.findById);
    }
}