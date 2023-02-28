import{create_coxa_treino} from '../repositories/coxaTreino.repository'

export const create = async(req,res)=>{
    try {
        const coxaTreino = await create_coxa_treino(req.body)
        res.status(200).send(coxaTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}