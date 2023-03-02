import {create, get,getId, update, remove} from '../controllers/exer_terca.controller'

const rotas_exer_terca = app =>{
    //inserir informação
    app.post("/terca", create)
    //listar
    app.get("/terca", get)
    app.get("/terca/:id", getId)
    //atualizar
    app.put("/terca/:id", update)
    //deletar
    app.delete("/terca/:id", remove)
}

export default rotas_exer_terca