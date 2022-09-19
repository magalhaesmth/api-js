
require("../config");

const Connection = require("../connection/Connection");

test('Conexão Realizada', async () => {
    let conexao = await Connection.obterConexao();
    expect(conexao.connections).not.toBeNull()
}, 100000)