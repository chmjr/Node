const { Person } = require("./person"); //Chamando a classe
const person = new Person("Henrique"); //Passando pro objeto

console.log(person.sayMyName());

//require("./modules/path"); //importar um arquivo
require("./modules/fs");
