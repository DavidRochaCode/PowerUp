import {create, remove, deleteAll, getByUser} from '../controllers/cafe.controller'

const rotas_cafe = app =>{

    //inserir informação
    app.post("/cafe", create)
    //listar
    app.get("/cafe/:id_conta", getByUser)
    //deletar
    app.delete("/cafe/:id", remove)
    app.delete("/cafe-delete", deleteAll)
}

export default rotas_cafe