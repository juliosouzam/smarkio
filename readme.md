<h2 align="center">
  Smarkio
</h2>

## :mortar_board: Tecnologias

## Backend

- [Express.js](https://github.com/expressjs/express)
- [IBM Watson](https://github.com/watson-developer-cloud/node-sdk)

## Frontend

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Styled Components](https://styled-components.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## :computer: Configuração

**É necessário ter uma conta na [IBM Cloud](https://cloud.ibm.com/) e um banco de dados MySQL.**

```bash
$ git clone git@github.com:juliosouzam/smarkio.git

$ cd smarkio
```

## Backend

```bash
$ cd backend
$ yarn # instalar as dependências

$ cp .env.example .env
# configure o arquivo .env com a API_KEY do IBM Cloud Text To Speech e o banco de dados MySQL.

$ yarn dev # iniciar o servidor
```

## Frontend

_**Em outro terminal**_

```bash
# na pasta smarkio
$ cd frontend
$ yarn # instalar as dependências

$ cp .env.example .env
# configure o arquivo .env com a API_URL, que é a url do backend que você acabou de configurar.

$ yarn start # inicia a aplicação
```

Developed by [me](https://github.com/juliosouzam) with :coffee: and :heart:
