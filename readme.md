#Desafio 01
1 - Deve criar um novo quadro com nome e descrição
2 - Deve permitir incluir colunas no quadro (por exemplo: Todo, Doing e Done) indicando se ela deve ou não contar o tempo do cartão
3 - Deve associar cartões em cada uma das colunas contendo o título da tarefa e a estimativa em horas, minutos e segundos
4 - Deve ser possível calcular a estimativa total de cada coluna
5 - Ao trocar de coluna deve ser possível armazenar o tempo que o cartão ficou em cada coluna (por exemplo: Todo: 3 dias, Doing: 3 horas)


#Desafio 02
- 1: Importar um arquivo CSV com dados de cards, contendo: nome da coluna, título, estimativa:
Exemplo:
`TODO;Implementar a importação de arquivo no formato CSV;10`
`TODO;Migrar o banco de dados para PostgreSQL;20`
`TODO;Atualizar a versão do Vue.js para 3;30`


- 2: Exportar o mesmo arquivo a partir dos dados em memória
- 3: Criar uma API utilizando o módulo http do Node.js contendo as rotas:
`GET /boards, retorna os quadros`
`GET /boards/id/columns, retorna as colunas do quadro`
`GET /boards/id/columns/id/cards, retorna os cartões da coluna`



**Importante:**
Ambas as funcionalidades devem persistir os dados apenas em memória (depois vamos implementar o banco de dados) e a interação deve ser por meio de testes automatizados.