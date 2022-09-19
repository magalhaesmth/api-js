const UserService = require("../services/UserService")

module.exports = class UserController {
    static async findById(req, res) {
        try {
            res.status(200).send(await UserService.findById(req.params.idUser));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.findById ' + e.message);
        }
    } 

    static async findAll(req, res) {
        try {
            res.status(200).send(await UserService.findAll());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.findAll ' + e.message);
        }
    } 

    static async create(req, res) {
        try {
            res.status(200).send(await UserService.create(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.create ' + e.message);
        }
    } // create()

    static async delete(req, res) {
        try {
            res.status(200).send(await UserService.delete(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.delete ' + e.message);
        }
    }

    static async update(req, res) {
        try {
            res.status(200).send(await UserService.update(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.update ' + e.message);
        }
    }
}