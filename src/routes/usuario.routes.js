import {create,get,getId, update, remove} from '../controllers/user.controller'

const rotas_usuario = app =>{
    //criar
    app.post("/usuario", create)
    //listar
    app.get("/usuario", get)
    app.get("/usuario/:id", getId)
    //atualizar
    app.put("/usuario/:id", update)
    //deletar
    app.delete("/usuario/:id", remove)

}
export default rotas_usuario

