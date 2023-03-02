import {create,get,getId, update, remove} from '../controllers/exer_quarta.controller'

const rotas_exer_quarta = app =>{
    //inserir informação
    app.post("/quarta", create)
    //listar
    app.get("/quarta", get)
    app.get("/quarta/:id", getId)
    //atualizar
    app.put("/quarta/:id", update)
    //deletar
    app.delete("/quarta/:id", remove)
}

export default rotas_exer_quarta