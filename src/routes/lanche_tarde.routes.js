import {create, get,getId, update, remove, deleteAll} from '../controllers/lanche_tarde.controller'

const rotas_lanche_tarde = app =>{
    //inserir informação
    app.post("/lanche-da-tarde", create)
    //listar
    app.get("/lanche-da-tarde", get)
    app.get("/lanche-da-tarde", getId)
    //atualizar
    app.put("/lanche-da-tarde/:id", update)
    //deletar
    app.delete("/lanche-da-tarde/:id", remove)
    app.delete("/lanche-da-tarde-delete", deleteAll)
    
}

export default rotas_lanche_tarde