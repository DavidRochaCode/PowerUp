import {create} from '../controllers/dorsal_treino.controller'

const rotas_dorsalTreino = app =>{
    //inserir informação
    app.post("/treino-de-dorsal", create)
}

export default rotas_dorsalTreino