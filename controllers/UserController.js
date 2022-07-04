const UserService = require("../services/UserService")


module.exports = class UserController {
    static async getUsers(req, res) {
        res.status(200).send(UserService.getUsers())
    }

    static async save(req, res) {
        res.status(200).send(UserService.save(req.body))
    }
}