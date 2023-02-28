import {create} from '../controllers/almoco.controller'

const rotas_almoco = app =>{
    //inserir informação
    app.post("/almoco", create)
}

export default rotas_almoco