//require é utilizado para importa oque foi exportado dos outros arquivos(express) do projeto 
const express= require('express');
const app= express();

// o back-end se conecta com o front-end através do get
//get retorna dados
//req = requisição res = resposta
app.get('/', (req, res) => {
    let mensagem ={mensagem: 'Olá, Boa noite!'};
    res.json(mensagem);
});


//listen se nenhuma porta for passada utilizará a porta 8080
// A função Listen faz da aplicação um servidor back-end que ficará sempre aguardando requisições.

app.listen(8080, ()=>{
    let data = new Date();
    console.log(`O servidor foi iniciado em: ${data} `)
})

// post insere dados 
//put atualiza dados
// delete exclui dados