import {create} from '../controllers/gluteo_treino.controller'

const rotas_gluteoTreino = app =>{
    //inserir informação
    app.post("/treino-de-gluteo", create)
}

export default rotas_gluteoTreino