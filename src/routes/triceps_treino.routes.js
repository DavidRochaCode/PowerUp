import {create} from '../controllers/triceps_treino.controller'

const rotas_tricepsTreino = app =>{
    //inserir informação
    app.post("/treino-de-triceps", create)
}

export default rotas_tricepsTreino