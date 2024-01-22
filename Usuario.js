import {randomUUID} from 'crypto'

//classe de usuario contendo todos os atributos necessários
//importada na server
export class Usuario {

    id 
    nome 
    idade
    cidade 
    created_at
    updated_at

    constructor({id, nome, idade, cidade}){
        console.log("Id que será utilizado", id)
        this.id = id ? id : randomUUID()
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.created_at = new Date().toISOString()
        this.updated_at = null
    }

}
