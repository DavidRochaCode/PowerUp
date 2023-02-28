import {create} from '../controllers/coxa_treino.controller'

const rotas_coxaTreino = app =>{
    //inserir informação
    app.post("/treino-de-coxa", create)
}

export default rotas_coxaTreino