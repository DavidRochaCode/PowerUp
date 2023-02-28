import{create_triceps_treino} from '../repositories/tricepsTreino.repository'

export const create = async(req,res)=>{
    try {
        const tricesTreino = await create_triceps_treino(req.body)
        res.status(200).send(tricesTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}