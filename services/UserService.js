var users = [];

module.exports = class UserService {
    static getUsers() {
        return { users: users }
    }
    static save(user) {
        users.push(user)
        return { user: user }
    }

}