const fs = require('fs');

//usar el metodo writefile para escribir un archivo
//fs.writeFile(file, data[, options], callback)

//fs.writeFile("archivo.txt","wilbert", (err)=>{
  //  if(err)throw err;
    //console.log("El archivo se ha creado");
//});

fs.readFile("archivo.txt", "utf8", (err,data)=>{
    if (err)throw err;
    console.log(data);
});