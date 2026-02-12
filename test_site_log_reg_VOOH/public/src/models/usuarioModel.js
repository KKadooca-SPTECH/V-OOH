var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsers, username, email, nome_completo FROM Users WHERE email = '${email}' AND passcode = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function autenticar_user(username, senha) {
    var instrucaoSql = `
        SELECT idUsers, username, email, nome_completo FROM Users WHERE username = '${username}' AND passcode = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(username, email, senha, nome_completo) {
    var instrucaoSql = `
        INSERT INTO Users (username, email, passcode, nome_completo) VALUES ('${username}', '${email}', '${senha}', '${nome_completo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    autenticar_user,
    cadastrar,
};