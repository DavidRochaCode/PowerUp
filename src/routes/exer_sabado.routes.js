import {create,get,getId, update, remove} from '../controllers/exer_sabado.controller'

const rotas_exer_sabado = app =>{
    //inserir informação
    app.post("/sabado", create)
    //listar
    app.get("/sabado", get)
    app.get("/sabado/:id", getId)
    //atualizar
    app.put("/sabado/:id", update)
    //deletar
    app.delete("/sabado/:id", remove)
    
}

export default rotas_exer_sabado