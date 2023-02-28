import {create} from '../controllers/biceps_treino.controller'

const rotas_bicepsTreino = app =>{
    //inserir informação
    app.post("/treino-de-biceps", create)
}

export default rotas_bicepsTreino