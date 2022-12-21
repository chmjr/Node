const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  //Criando servidor
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
  }
  if (req.url === "/users") {
    //Entrou pra criar o Objeto
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
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users)); //Convertendo JSON para USERS
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port} !`));
