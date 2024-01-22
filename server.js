import express, { request } from 'express' 
import {Usuario} from './Usuario.js'

const PORT = 3000
const server = express()

//Habilitar express para receber JSON no corpo da request
server.use(express.json())

//Banco de dados em memoria 
let bancoDados = [
    new Usuario({id:'5f1f987d-6acc-4ff1-9aec-d50de8e1382c', nome:'Maria Oliveira', idade:30, cidade:'Recife'}), 
    new Usuario({id:'5c358a37-bc56-45ff-a6e4-20099b4e773e', nome:'Henrique Silva', idade:20,cidade:'Belo Horizonte'}), 
    new Usuario({id:'75910b48-9d06-46d0-a4fa-caf7bec29e75', nome:'Fernando Souza', idade:15, cidade:'Rio de Janeiro'}), 
    new Usuario({nome:'Juliana Teixeira', idade:45, cidade:'Salvador'}), 
    new Usuario({nome:'Paloma Andrade', idade:50, cidade:'Aracaju'})
]

//Rota get: busca o banco de dados com todos os usuarios contidos no banco de dados(array)  
server.get("/usuarios/buscar", function(request,response){
const objetoResposta = {
    'itens': bancoDados
}
//mensagem fornecida após realizar a busca
response.status(200).json(objetoResposta)
})

//Rota get: busca um usuario do banco de dados a partir de um id específico 
server.get("/usuarios/buscar/:idUsuario", function(request, response){
console.log("Esse id veio da request:", request.params.idUsuario) 

const usuarioEncontrado = bancoDados.findIndex((usuario) => usuario.id === request.params.idUsuario)
console.log('Valor do findIndex.', usuarioEncontrado)
console.log('Usuario encontrado:', bancoDados[usuarioEncontrado]) 

if (usuarioEncontrado < 0 ) {
    response.status(404).json({
        mensagem: "Usuário não encontrado."
    })
}

response.status(200).json(bancoDados[usuarioEncontrado])
})

//Rota post: cria um novo usuario e inclui no banco de dados  
server.post("/usuarios/cadastrar", function(request, response){

    const {nome, idade, cidade} = request.body
    console.log("Dados recebidos:", nome, idade, cidade)

    const novoUsuario = new Usuario({nome: nome, idade: idade, cidade: cidade })
    console.log("Novo usuario criado:", novoUsuario)
    bancoDados.push(novoUsuario)
    
   response.status(201).json(novoUsuario)
})

//Rota put: atualiza um usuario do banco de dados
server.put("/usuarios/atualizar/:idUsuario", function(request, response){
    const {idUsuario} = request.params
    const {nome, idade, cidade} = request.body
    console.log("Dados recebidos", nome, idade, cidade)

    const indiceUsuario = bancoDados.findIndex(usuario => usuario.id === idUsuario)
    
    const usuario =  bancoDados[indiceUsuario] 
    usuario.nome = nome
    usuario.idade = idade
    usuario.cidade = cidade
    
    response.status(200).json(usuario)

    })
   
//Rota delete: deleta um usuario do banco de dados    
server.delete("/usuarios/deletar/:idUsuario", function(request, response){
    const {idUsuario} = request.params

    const indiceUsuario = bancoDados.findIndex(usuario => usuario.id === idUsuario)
    if(indiceUsuario < 0) {
        response.status(404).json({mensagem: "Usuário não encontrado, tente novamente."})
      }

    console.log("Indice do Usuario:", indiceUsuario)
    console.log("Antes de deletar:", bancoDados[indiceUsuario])

    bancoDados.splice(indiceUsuario, 1)
    console.log("Depois de deletar:", bancoDados[indiceUsuario])

    response.status(200).json("Usuário deletado do banco de dados com sucesso.")
  
})


server.listen(PORT, ()=> console.log("Servidor rodando com sucesso."))