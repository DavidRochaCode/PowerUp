import {create,get,getId, update, remove, deleteAll} from '../controllers/cafe.controller'

const rotas_cafe = app =>{

    //inserir informação
    app.post("/cafe", create)
    //listar
    app.get("/cafe", get)
    app.get("/cafe/:id", getId)
    //atualizar
    app.put("/cafe/:id", update)
    //deletar
    app.delete("/cafe/:id", remove)
    app.delete("/cafe-delete", deleteAll)
}

export default rotas_cafe