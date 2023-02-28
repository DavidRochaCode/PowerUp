import {create} from '../controllers/exer_triceps.controller'

const rotas_exer_triceps = app =>{
    //inserir informação
    app.post("/triceps", create)
}

export default rotas_exer_triceps