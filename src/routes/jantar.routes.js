import {create,get,getId, update, remove} from '../controllers/jantar.controller'

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
}

export default rotas_jantar