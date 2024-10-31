# API HOTEL

Para começar vamos executar o comando `npm install` para instalar todos os módulos e dependências utilizados no node

Agora configuramos a conexão com o banco de dados no arquivo `index.js`
*Você pode utilizar o dump com um banco já pronto no arquivo hotel.sql*

Agora inicie o servidor com o comando `npm run server` no terminal

Agora é só testar a api rest no POSTMAN ou INSOMNIA e ser feliz :)

##  CRUD CLIENTE

**GET** http://localhost:8800/get/cliente

**POST** http://localhost:8800/add/cliente
``` json
{
	"name": "Ricardo Ferreira da Silva",
	"age": 52,
	"uf": "AL"
}
```

**PUT** http://localhost:8800/edit/cliente
``` json
{
	"cod_cliente": 1,
	"name": "Luiz Filipe Santos Omena",
	"age": 20,
	"uf": "PE"
}
```

**DEL** http://localhost:8800/delete/cliente
``` json
{
	"cod_cliente": 3
}
```



## CRUD RESERVA

**GET** http://localhost:8800/get/reserva

**POST** http://localhost:8800/add/reserva
``` json
{
	"data_reserva": "2024-10-16",
	"idCliente": 1,
	"idQuarto": 1
}
```
**PUT** http://localhost:8800/edit/reserva
``` json
{	
	"data_reserva": "2024-10-10",
	"data_checkin":"2024-10-10" ,
	"data_checkout": "2024-10-16",
	"idCliente": 1,
	"idQuarto": 1,
	"id_reserva": 3
}
```
**DEL** http://localhost:8800/delete/reserva
``` json
{
	"id_reserva": 3
}
```