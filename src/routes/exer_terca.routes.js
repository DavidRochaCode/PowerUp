import {create} from '../controllers/exer_terca.controller'

const rotas_exer_terca = app =>{
    //inserir informação
    app.post("/terca", create)
}

export default rotas_exer_terca