import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
const APP = express();

//liberar qualquer acesso (domínio/IP)
APP.use(cors())
APP.use(express.json())

//require("../src/routes/index")(APP)

APP.listen(3001)
console.log("Servidor Iniciado")