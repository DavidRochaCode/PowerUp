import {create} from '../controllers/alimento.controller'

const rotas_alimento = app =>{
    //inserir informação
    app.post("/alimento", create)
}

export default rotas_alimento