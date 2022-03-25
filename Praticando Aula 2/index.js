const express = require('express');
const app=express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia.js');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDia(dia);

    res.json({mensagem: mensagemSelecionada});
})

app.listen(8082, ()=>{
    console.log(`Servidor foi iniciado em: ${data}.`)

})