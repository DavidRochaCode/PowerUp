import {create} from '../controllers/exer_gluteo.controller'

const rotas_exer_gluteo = app =>{
    //inserir informação
    app.post("/gluteo", create)
}

export default rotas_exer_gluteo