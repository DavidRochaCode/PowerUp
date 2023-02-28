import{create_biceps_treino} from '../repositories/bicepsTreino.repository'

export const create = async(req,res)=>{
    try {
        const bicepsTreino = await create_biceps_treino(req.body)
        res.status(200).send(coxaTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}