# Projeto final instituto eldorado (Backend)
## Projeto desenvolvido em NODE JS, com banco de dados MYSQL usando o ORM SEQUELIZE
#  
# Configuração de DataBase: Com o mysql instalado na máquina siga as seguintes orientações:
##   - api/database/db.js
##       informe as configurações de seu BD, tais como o nome do Host, User, Password, Port, DB.
##   - api/models/
##       modelos de entidades, automaticamente o Sequelize cria as Tables quando o projeto é iniciado, caso ainda não tenha sido criado.
#
# Configurações de Controladores: Responsável por gerenciar as trativas das principais funções de um CRUD de uma determinada Entidade
##  - api/controllers/
# Configuração de Rotas: Gerenciamento e definição dos endpoints que uma REST API possa fornecer em conjunto com as controllers que recebem tais informações.
##  - api/routes/
## Duas rotas foram criadas como exemplo:
### Request do tipo GET
### - http://localhost:portadefinida/device
### - http://localhost:portadefinida/category
