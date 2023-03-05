import {create,get,getId, update, remove} from '../controllers/conta.controller'
const{veryToken} = require("../middlewares/autenticacao")

const rotas_conta = app =>{
    //criar
    app.post("/conta", create)
    //listar
    app.get("/conta", veryToken, get)
    app.get("/conta/:id",veryToken, getId)
    //atualizar
    app.put("/conta/:id",veryToken, update)
    //deletar
    app.delete("/conta/:id",veryToken, remove)

}
export default rotas_conta