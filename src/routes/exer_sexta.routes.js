import {create,get,getId, update, remove} from '../controllers/exer_sexta.controller'

const rotas_exer_sexta = app =>{
    //inserir informação
    app.post("/sexta", create)
    //listar
    app.get("/sexta", get)
    app.get("/sexta/:id", getId)
    //atualizar
    app.put("/sexta/:id", update)
    //deletar
    app.delete("/sexta/:id", remove)
}

export default rotas_exer_sexta