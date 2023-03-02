import {create} from '../controllers/exer_sexta.controller'

const rotas_exer_sexta = app =>{
    //inserir informação
    app.post("/sexta", create)
}

export default rotas_exer_sexta