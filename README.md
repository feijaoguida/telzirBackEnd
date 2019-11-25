# telzirBackEnd

O BackEnd foi devenvolvido em NodeJs, Express, Postgres, Sequelize.

Foi criado uma API para gravação da Tabela de Tarifa que pode ser acessado pelo link
https://telzirbackend.herokuapp.com/tarifas

Usando o metodo post e enviado um json no corpo da requisição com os dados.
{
	"origem" : "" ,
	"destino" : "" ,
	"valor" : ""
}

Utilizando o Get no endereço https://telzirbackend.herokuapp.com/tarifas é retornado um array com 
uma listagem com todas as tarifas no formato de Json
[
  {
    "id": 3,
    "origem": 11,
    "destino": 17,
    "valor": "1.70"
  },
  {
    "id": 5,
    "origem": 11,
    "destino": 18,
    "valor": "0.90"
  },
 ]
 
 Utilizando o metodo Post e o endereço https://telzirbackend.herokuapp.com/simulacao, e feito o calculo da simulação e
 retornado um json com o calculo. Deve se enviar os dados no corpo da requisição.
 
{
	"tempo":"200",
	"plano":"120",
	"origem":"11",
	"destino":"16"
}

e Retorna um objeto Json.

{
  "origem": "11",
  "destino": "16",
  "tempo": "200",
  "plano": "120",
  "comFaleMais": 167.2,
  "semFaleMais": 380
}

