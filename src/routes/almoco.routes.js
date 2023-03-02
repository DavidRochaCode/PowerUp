import {create,get,getId, update, remove} from '../controllers/almoco.controller'

const rotas_almoco = app =>{
    //inserir informação
    app.post("/almoco", create)
    //listar
    app.get("/almoco", get)
    app.get("/almoco/:id", getId)
    //atualizar
    app.put("/almoco/:id", update)
    //deletar
    app.delete("/almoco/:id", remove)
}

export default rotas_almoco