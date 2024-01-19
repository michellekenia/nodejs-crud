EU, COMO: Usuário do CRUD NodeJS.

PRECISO: De uma rota para buscar um usuário por id

PARA: Possibilitar a recuperação de um usuário único

Premissas:
Usuários iniciais gravados no banco de dados

Fora do Escopo:
Desenvolvimento da tela.
Tratamento de errors.
Validação de campos.
Testes unitários.
Testes de integração.
Conexão com banco de dados.

Repositório no GitHub:

https://github.com/michellekenia/nodejs-crud


Detalhamento Técnico:

Incluir na API nodejs-crud uma rota que permita a consulta de um único usuário por id. Ids são únicos na base de dados, portanto o retorno da rota deve ser de apenas um único usuário.

Rota: GET http://localhost:3333/usuarios/buscar/:idusuario

O parâmetro da rota é :idusuario (veja ele aplicado no caminho acima)
Deve ser uma string

Utilize a documentação do Express para aprender a consumir esses parâmetros: http://expressjs.com/en/guide/routing.html#route-parameters

Response: Um único objeto usuário
```
"items": [
    {
        "id": "xpto1234..."
        "nome": "valor_de_nome_valido",
        "idade": 12,
        "genero": "valor_de_genero_valido",
        "created_at": "valor_de_data_valido",
        "updated_at": null
    },
]

HTTP Status:

200 - Sucesso

SUBTASKS:

- [ ] Receber o parâmetro na rota e exibir no console.log
- [ ] Utilizar o método findIndex do Javascript para acessar o array chamado database e validar se existe o array que veio no parâmetro dentro dele. Retornar apenas o elemento que contém o mesmo id que veio do parâmetro.

--- 

EU, COMO: Usuário do CRUD NodeJS.

PRECISO: De uma rota para criar um novo usuário

PARA: Possibilitar a inclusão de um novo usuário na base de dados

Premissas:
Usuários iniciais gravados no banco de dados

Fora do Escopo:
Desenvolvimento da tela.
Tratamento de errors.
Validação de campos.
Testes unitários.
Testes de integração.
Conexão com banco de dados.

Repositório no GitHub:

https://github.com/michellekenia/nodejs-crud


Detalhamento Técnico:

Incluir na API nodejs-crud uma rota que permita a criação de um novo usuário. 

Rota: POST http://localhost:3333/usuarios/cadastrar/

A rota tem um corpo que carrega os seguintes campos:
Request:
```
    {
        "id": "xpto1234..."
        "nome": "valor_de_nome_valido",
        "idade": 12,
        "genero": "valor_de_genero_valido",
        "created_at": "valor_de_data_valido",
        "updated_at": null
    },

Utilize a documentação do Express para aprender a consumir esses parâmetros: http://expressjs.com/en/guide/routing.html#route-parameters

Response: Sem conteúdo na resposta, N/A

HTTP Status:

201 - Criado

SUBTASKS:

- [ ] Criar uma rota POST no express
- [ ] Habilitar express para receber JSON no corpo da request
- [ ] Instanciar um novo Usuário.js com os campos que chegaram da request
- [ ] Use console log para ver o Usuário recem criado antes de add ao array database, vc vai precisar do id desse usuário para ver se ele foi persistido no banco de dados mesmo.
- [ ] Empurrar para o array database o novo usuário criado
- [ ] Consultar o usuário criado pela rota de encontrar um usuário por id

**Não reinicie a aplicação, pois usuários criados por essa nova rota post serão perdidos toda vez que a aplicação reiniciar.**