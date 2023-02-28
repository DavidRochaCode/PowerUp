import {create} from '../controllers/peitoral_treino.controller'

const rotas_peitoralTreino = app =>{
    //inserir informação
    app.post("/treino-de-peitoral", create)
}

export default rotas_peitoralTreino