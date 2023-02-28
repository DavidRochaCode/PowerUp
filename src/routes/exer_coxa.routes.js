import {create} from '../controllers/exer_coxa.controller'

const rotas_exer_coxa = app =>{
    //inserir informação
    app.post("/coxa", create)
}

export default rotas_exer_coxa