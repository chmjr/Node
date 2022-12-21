//const { Person } = require("./person"); //Chamando a classe
//const person = new Person("Henrique"); //Passando pro objeto
const dotenv = require("dotenv"); //dot env para guardar senhas e password
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//console.log(person.sayMyName());
//require("./modules/path"); //importar um arquivo
//require("./modules/http"); //Forma pior de manipular Get e Set de Servidor
//require("./modules/express");
