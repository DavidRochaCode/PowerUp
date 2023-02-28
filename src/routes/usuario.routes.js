import {create} from '../controllers/user.controller'

const rotas_usuario = app =>{
    //inserir informação
    app.post("/usuario", create)
}

export default rotas_usuario