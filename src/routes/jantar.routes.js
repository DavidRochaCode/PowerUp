import {create,get,getId, update, remove, deleteAll} from '../controllers/jantar.controller'

const rotas_jantar = app =>{
    //inserir informação
    app.post("/jantar", create)
    //listar
    app.get("/jantar", get)
    app.get("/jantar", getId)
    //atualizar
    app.put("/jantar/:id", update)
    //deletar
    app.delete("/jantar/:id", remove)
    app.delete("/jantar-delete", deleteAll)
}

export default rotas_jantar