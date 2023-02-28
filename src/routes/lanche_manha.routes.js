import {create} from '../controllers/lanche_manha.controller'

const rotas_lache_manha = app =>{
    //inserir informação
    app.post("/lanche-da-manha", create)
}

export default rotas_lache_manha