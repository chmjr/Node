//Express jeito mais facil de criar Servidor
const express = require("express");
const UserModel = require("../src/database/models/user.model");
const app = express(); //Inicializar Express
app.use(express.json()); //Para reconhecer que vai usar JSON nas requisições

app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("Hello World");
});

app.get("/users", (req, res) => {
  //Pegar a lista de usuario com GET
  const users = [
    {
      name: "Carlos Henrique",
      email: "rico700@hotmail.com",
    },
    {
      name: "Larissa H Martendal",
      email: "larissahmartendal@hotmail.com",
    },
  ];
  res.status(200).json(users); //Resposta do server com a Lista de usuarios
});

app.post("/users", async (req, res) => {
  //Mandar para o USERS POST
  try {
    const user = UserModel.create(req.body);
    res.status(201).json(user); //201 - Registro foi criado com sucesso
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(port, () => console.log(`Rodando com o Express na porta ${port}`));
