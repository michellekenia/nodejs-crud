import {randomUUID} from 'crypto'

//classe de usuario contendo todos os atributos necessários
//importada na server
export class Usuario {

    id 
    nome 
    idade
    genero 
    created_at
    updated_at

    constructor({id, nome, idade, genero}){
        console.log("Id que será utilizado", id)
        this.id = id ? id : randomUUID()
        this.nome = nome
        this.idade = idade
        this.genero = genero
        this.created_at = new Date().toISOString()
        this.updated_at = null
    }

}

// module.exports = Usuario

// function main(){
//     const user = new Usuario('Michelle', 31, 'Mulher')
//     console.log("Primeiro usuario", user)
// }
// main()