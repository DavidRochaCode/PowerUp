import {create} from '../controllers/exer_dorsal.controller'

const rotas_exer_dorsal = app =>{
    //inserir informação
    app.post("/dorsal", create)
}

export default rotas_exer_dorsal