const fs = require("fs");
const path = require("path");

//Criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//if (error) {
//return console.log("Erro: ", error);
//}
//console.log("Pasta criada com sucesso!!");
//});

//Adicionar um arquivo em uma pasta (Assincrono, executa junto com os outros)
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Conteudo dentro do File",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!!");
  }
);

//Adicionar conteudo no arquivo já criado DEVE ser dentro do writeFile
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Adicionar conteudo",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Adicionado com sucesso!!");
  }
);

//Ler um arquivo - Deve ser dentro do WritFile
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data); //Mostrar o conteudo do arquivo
  }
);
