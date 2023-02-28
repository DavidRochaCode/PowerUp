import {create} from '../controllers/exer_deltoides.controller'

const rotas_exer_deltoides = app =>{
    //inserir informação
    app.post("/deltoides", create)
}

export default rotas_exer_deltoides