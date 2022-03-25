let dados = require('./data.js');

function retornarMensagemDia(dia){
    return dados.frases[dia - 1];
}

exports.retornarMensagemDia = retornarMensagemDia;