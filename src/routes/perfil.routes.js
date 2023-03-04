import {create,get,getId, update, remove} from '../controllers/perfil.controller'

const rotas_perfil = app =>{
    //criar
    app.post("/perfil", create)
    //listar
    app.get("/perfil", get)
    app.get("/perfil/:id", getId)
    //atualizar
    app.put("/perfil/:id", update)
    //deletar
    app.delete("/perfil/:id", remove)

}
export default rotas_perfil
