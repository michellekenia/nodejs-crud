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

200 - Quando o número de objetos na lista for menor que o tamanho da página ou nenhum objeto for encontrado.

SUBTASKS:

- [ ] Receber o parâmetro na rota e exibir no console.log
- [ ] Utilizar o método findIndex do Javascript para acessar o array chamado database e validar se existe o array que veio no parâmetro dentro dele. Retornar apenas o elemento que contém o mesmo id que veio do parâmetro.  