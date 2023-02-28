import {create} from '../controllers/deltoides_treino.controller'

const rotas_deltoidesTreino = app =>{
    //inserir informação
    app.post("/treino-de-deltoides", create)
}

export default rotas_deltoidesTreino