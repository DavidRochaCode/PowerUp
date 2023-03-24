import {create,get,getId, update, remove, getByUser} from '../controllers/perfil.controller'
const {veryToken} = require("../middlewares/autenticacao")
const rotas_perfil = app =>{

    //criar
    app.post("/perfil",veryToken, create)
    //listar tudo
    app.get("/perfil/:id_conta", getByUser)
    //deletar
    app.delete("/perfil/:id_conta",veryToken, remove)
    //atualizar
    app.put("/perfil/atualizar/:id_conta", update)

}
export default rotas_perfil
