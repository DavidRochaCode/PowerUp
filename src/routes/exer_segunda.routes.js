import {create, get,getId, update, remove} from '../controllers/exer_segunda.controller'

const rotas_exer_segunda = app =>{
    //inserir informação
    app.post("/segunda", create)
    //listar
    app.get("/segunnda", get)
    app.get("/segunda/:id", getId)
    //atualizar
    app.put("/segunda/:id", update)
    //deletar
    app.delete("/segunda/:id", remove)
}

export default rotas_exer_segunda