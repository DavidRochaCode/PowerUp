import {create} from '../controllers/jantar.controller'

const rotas_jantar = app =>{
    //inserir informação
    app.post("/jantar", create)
}

export default rotas_jantar