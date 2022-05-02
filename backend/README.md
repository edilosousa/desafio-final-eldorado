# Projeto final instituto eldorado (Backend)
## Projeto desenvolvido em NODE JS, com banco de dados MYSQL usando o ORM SEQUELIZE
#  
# Configuração de DataBase: Com o mysql instalado na máquina siga as seguintes orientações:
##   - src/database/db.js
##       informe as configurações de seu BD, tais como o nome do Host, User, Password, Port, DB.
##   - src/models/
##       modelos de entidades, automaticamente o Sequelize cria as Tables quando o projeto é iniciado, caso ainda não tenha sido criado.
#
# Configurações de Controladores: Responsável por gerenciar as trativas das principais funções de um CRUD de uma determinada Entidade
##  - src/controllers/
# Configuração de Rotas: Gerenciamento e definição dos endpoints que uma REST src possa fornecer em conjunto com as controllers que recebem tais informações.
##  - src/routes/
## Duas rotas foram criadas como exemplo:
### Request do tipo GET
### - http://localhost:3000/api/device
### - http://localhost:3000/api/category
## Request do tipo POST
### - http://localhost:3000/api/login

## Observações:
### jsonwebtoken: pacote que implementa o protocolo JSON Web Token;
### dotenv-safe: pacote para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa    prática para configurações em geral;
