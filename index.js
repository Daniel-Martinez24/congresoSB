const express = require("express");

const server = express();

const port = process.env.PORT || 3000;

server.use(express.static(__dirname + "/public"));

server.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto ${port}`);
});
