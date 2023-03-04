import {create,get,getId, update, remove} from '../controllers/conta.controller'

const rotas_conta = app =>{
    //criar
    app.post("/conta", create)
    //listar
    app.get("/conta", get)
    app.get("/conta/:id", getId)
    //atualizar
    app.put("/conta/:id", update)
    //deletar
    app.delete("/conta/:id", remove)

}
export default rotas_conta