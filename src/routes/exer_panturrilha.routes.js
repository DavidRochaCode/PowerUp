import {create} from '../controllers/exer_panturrilha.controller'

const rotas_exer_panturrilha = app =>{
    //inserir informação
    app.post("/panturrilha", create)
}

export default rotas_exer_panturrilha