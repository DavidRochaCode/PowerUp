import {create} from '../controllers/treino.controller'

const rotas_treino = app =>{
    //inserir informação
    app.post("/treino", create)
}

export default rotas_treino