import {create} from '../controllers/exer_quarta.controller'

const rotas_exer_quarta = app =>{
    //inserir informação
    app.post("/quarta", create)
}

export default rotas_exer_quarta