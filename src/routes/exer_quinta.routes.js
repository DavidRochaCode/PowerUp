import {create} from '../controllers/exer_quinta.controller'

const rotas_exer_quinta = app =>{
    //inserir informação
    app.post("/quinta", create)
}

export default rotas_exer_quinta