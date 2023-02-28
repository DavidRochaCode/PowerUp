import {create} from '../controllers/panturrilha_treino.controller'

const rotas_panturrilhaTreino = app =>{
    //inserir informação
    app.post("/treino-de-panturrilha", create)
}

export default rotas_panturrilhaTreino