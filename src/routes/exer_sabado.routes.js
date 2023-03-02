import {create} from '../controllers/exer_sabado.controller'

const rotas_exer_sabado = app =>{
    //inserir informação
    app.post("/sabado", create)
}

export default rotas_exer_sabado