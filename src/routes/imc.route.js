import {create} from '../controllers/imc.controller'

const rotas_imc = app =>{
    //inserir informação
    app.post("/imc", create)
}

export default rotas_imc