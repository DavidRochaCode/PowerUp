import {create, get,getId, update, remove, deleteAll} from '../controllers/lanche_manha.controller'

const rotas_lache_manha = app =>{
    //inserir informação
    app.post("/lanche-da-manha", create)
    //listar
    app.get("/lanche-da-manha", get)
    app.get("/lanche-da-manha", getId)
    //atualizar
    app.put("/lanche-da-manha/:id", update)
    //deletar
    app.delete("/lanche-da-manha/:id", remove)
    app.delete("/lanche-da-manha-delete",deleteAll)
}

export default rotas_lache_manha