import {create} from '../controllers/cafe.controller'

const rotas_cafe = app =>{
    //inserir informação
    app.post("/cafe", create)
}

export default rotas_cafe