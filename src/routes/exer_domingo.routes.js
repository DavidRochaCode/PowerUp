import {create} from '../controllers/exer_domingo.controller'

const rotas_exer_domingo = app =>{
    //inserir informação
    app.post("/domingo", create)
}

export default rotas_exer_domingo