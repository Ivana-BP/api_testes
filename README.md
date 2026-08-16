API de Usuários

Objetivo:
Esta API foi desenvolvida dentro de uma atividade acadêmica para realizar o gerenciamento básico de usuários, permitindo cadastrar e consultar usuários por meio de requisições HTTP.

O projeto também demonstra o funcionamento de diferentes respostas HTTP, incluindo casos de sucesso, erro de validação e usuário não encontrado.

Tecnologias utilizadas:
Node.js
Express
JavaScript
Thunder Client
Visual Studio Code
Execução local

1. Instalar as dependências
No terminal, dentro da pasta do projeto, execute:

npm install
2. Iniciar a API

Execute:
npm start
O servidor será iniciado em:
http://localhost:3000
Quando a mensagem abaixo aparecer no terminal, a API estará pronta para uso:
Servidor rodando em http://localhost:3000

3. Testar a API
Os endpoints podem ser testados utilizando o Thunder Client ou outra ferramenta de requisições HTTP.

Endpoints
1. Criar usuário
Método: POST
Endpoint:
http://localhost:3000/users
Body:
{
  "name": "Carlos Silva",
  "email": "carlos@email.com"
}

Resposta esperada: 201 Created

{
  "data": {
    "id": 3,
    "name": "Carlos Silva",
    "email": "carlos@email.com"
  }
}

2. Criar usuário sem e-mail
Método: POST
Endpoint:
http://localhost:3000/users
Body:
{
  "name": "Carlos Silva"
}

Resposta esperada: 400 Bad Request

{
  "error": "O campo 'email' é obrigatório."
}

3. Listar usuários
Método: GET
Endpoint:
http://localhost:3000/users
Resposta esperada: 200 OK
{ 
  "data": [ 
    { "id": 1,
    "name": "João Silva",
    "email": "joao@email.com" 
      
    },
    {
      "id": 2,
      "name": "Maria Souza",
      "email": "maria@email.com" 
    }, 
    { 
      "id": 3, 
      "name": "Carlos Silva",
      "email": "carlos@email.com" 
    }
    ] 
  
}

4. Buscar usuário inexistente
Método: GET
Endpoint:
http://localhost:3000/users/9999
Resposta esperada: 404 Not Found
{
  "error": "Usuário não encontrado"
}
Resumo dos endpoints
Método	Endpoint	Descrição	Status
POST	/users	Cadastrar usuário	201
POST	/users	Cadastrar sem e-mail	400
GET	/users	Listar usuários	200
GET	/users/9999	Usuário inexistente	404

Testes realizados
Os endpoints foram testados utilizando o Thunder Client, validando os seguintes cenários:
Criação de usuário com sucesso — 201 Created
Validação de campo obrigatório — 400 Bad Request
Listagem de usuários — 200 OK
Busca de usuário inexistente — 404 Not Found
