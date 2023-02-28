import {create} from '../controllers/exer_biceps.controller'

const rotas_exer_biceps = app =>{
    //inserir informação
    app.post("/biceps", create)
}

export default rotas_exer_biceps