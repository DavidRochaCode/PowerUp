import {create} from '../controllers/exer_peitoral.controller'

const rotas_exer_peitoral = app =>{
    //inserir informação
    app.post("/peitoral", create)
}

export default rotas_exer_peitoral