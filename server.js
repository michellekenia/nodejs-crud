import express from 'express' 
import {Usuario} from './Usuario.js'

const PORT = 3000
const server = express()

//Habilitar express para receber JSON no corpo da request
server.use(express.json())

//Banco de dados em memoria 
const bancoDados = [
    new Usuario("5f1f987d-6acc-4ff1-9aec-d50de8e1382c", 'Michelle', 31, 'Mulher'), 
    new Usuario("5c358a37-bc56-45ff-a6e4-20099b4e773e", 'Michelle K', 31, 'Mulher'), 
    new Usuario("75910b48-9d06-46d0-a4fa-caf7bec29e75",'Michelle S', 31, 'Mulher'), 
    new Usuario(undefined,'Kenia', 31, 'Mulher'), 
    new Usuario(null, "Kenia M", 31, "Mulher")
]

//Rota que busca o banco de dados com todos os elementos 
//contidos no banco de dados - array  
server.get("/usuarios/buscar", function(request,response){
const objetoResposta = {
    'itens': bancoDados
}
//mensagem fornecida após realizar a busca
response.status(200).json(objetoResposta)
})

//Rota que busca um usuario do banco de dados a partir de um id específico 
server.get("/usuarios/buscar/:idUsuario", function(request, response){
console.log("Esse id veio da request", request.params.idUsuario) 

const usuarioEncontrado = bancoDados.findIndex((usuario) => usuario.id === request.params.idUsuario)
console.log('Valor do findIndex', usuarioEncontrado)
console.log('usuario encontrado', bancoDados[usuarioEncontrado]) 

if (usuarioEncontrado < 0 ) {
    response.status(404).json({
        mensagem: "Usuário não encontrado"
    })
}

response.status(200).json(bancoDados[usuarioEncontrado])
})

//Rota que cria um usuario novo e inclui no banco de dados  
server.post("/usuarios/cadastrar", function(request, response){

    const {id, name, idade, genero, created_at, updated_at} = request.body
    console.log("Dados recebidos", id, name, idade, genero, created_at, updated_at)

    const novoUsuario = {id, name, idade, genero, created_at, updated_at}
    bancoDados.push(novoUsuario)
    
   response.status(201).json(novoUsuario)
})




server.listen(PORT, ()=> console.log("Servidor rodando com sucesso."))