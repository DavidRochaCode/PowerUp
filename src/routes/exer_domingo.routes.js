import {create,get,getId, update, remove} from '../controllers/exer_domingo.controller'

const rotas_exer_domingo = app =>{
    //inserir informação
    app.post("/domingo", create)
    //listar
    app.get("/domingo", get)
    app.get("/domingo/:id", getId)
    //atualizar
    app.put("/domingo/:id", update)
    //deletar
    app.delete("/domingo/:id", remove)
}

export default rotas_exer_domingo