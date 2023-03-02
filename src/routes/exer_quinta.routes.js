import {create,get,getId, update, remove} from '../controllers/exer_quinta.controller'

const rotas_exer_quinta = app =>{
    //inserir informação
    app.post("/quinta", create)
    //listar
    app.get("/quinta", get)
    app.get("/quinta/:id", getId)
    //atualizar
    app.put("/quinta/:id", update)
    //deletar
    app.delete("/quinta/:id", remove)
}

export default rotas_exer_quinta