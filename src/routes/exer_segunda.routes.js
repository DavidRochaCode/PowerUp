import {create} from '../controllers/exer_segunda.controller'

const rotas_exer_segunda = app =>{
    //inserir informação
    app.post("/segunda", create)
}

export default rotas_exer_segunda