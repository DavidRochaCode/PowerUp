import {create} from '../controllers/dieta.controller'

const rotas_dieta = app =>{
    //inserir informação
    app.post("/dieta", create)
}

export default rotas_dieta