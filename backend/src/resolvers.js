const users = require('./db.json');

module.exports = {
    Query: {
        users: () => users,
        getByName: (_, { nome }) => users.filter(i => i.nome.includes(nome)),
        getByCPF: (_, { cpf }) => users.find(i => i.cpf === cpf),
    },

    Mutation: {
        createUser:() => users[1],
    },
}