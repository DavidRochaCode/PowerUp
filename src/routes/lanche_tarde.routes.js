import {create} from '../controllers/lanche_tarde.controller'

const rotas_lanche_tarde = app =>{
    //inserir informação
    app.post("/lanche-da-tarde", create)
}

export default rotas_lanche_tarde