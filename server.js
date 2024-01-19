import express, { request } from 'express' 
import {Usuario} from './Usuario.js'

const PORT = 3000
const server = express()

//Habilitar express para receber JSON no corpo da request
server.use(express.json())

//Banco de dados em memoria 
const bancoDados = [
    new Usuario({id:"5f1f987d-6acc-4ff1-9aec-d50de8e1382c", nome:'Michelle', idade:31, genero:'Mulher'}), 
    new Usuario({id:"5c358a37-bc56-45ff-a6e4-20099b4e773e", nome:'Michelle K', idade:31,genero:'Mulher'}), 
    new Usuario({id:"75910b48-9d06-46d0-a4fa-caf7bec29e75", nome:'Michelle S', idade:31, genero:'Mulher'}), 
    new Usuario({nome:'Kenia', idade:31, genero:'Mulher'}), 
    new Usuario({nome:"Kenia M", idade:31, genero:"Mulher"})
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

    const {name, idade, genero} = request.body
    console.log("Dados recebidos", name, idade, genero)

    const novoUsuario = new Usuario({nome: name, idade: idade, genero: genero})
    console.log("Novo usuario criado", novoUsuario)
    bancoDados.push(novoUsuario)
    
   response.status(201).json(novoUsuario)
})

server.put("/usuarios/atualizar/:idUsuario", function(request, response){
    const {idUsuario} = request.params
    const {name, idade, genero} = request.body
    console.log("Dados recebidos", name, idade, genero)

    const indiceUsuario = bancoDados.findIndex(usuario => usuario.id === idUsuario)
    
    // const usuarioAtualizado = {id, name, idade, genero, created_at, updated_at}
    const usuario =  bancoDados[indiceUsuario] 
    usuario.nome = name
    usuario.idade = idade
    usuario.genero = genero
    

    response.status(200).json(usuario)

    })
   

server.listen(PORT, ()=> console.log("Servidor rodando com sucesso."))