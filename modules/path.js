const path = require("path");

//Basename
console.log(path.basename(__filename)); //Ver o nome do arquivo

//Dir name
console.log(path.dirname(__filename)); //Ver o nome do diretorio

//Extensão do arquivo
console.log(path.extname(__filename)); //Extensão do arquivo

//Criar um objeto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "usuario1", "usuario1.html"));
