import{create_peitoral_treino} from '../repositories/peitoralTreino.repository'

export const create = async(req,res)=>{
    try {
        const peitoralTreino = await create_peitoral_treino(req.body)
        res.status(200).send(peitoralTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}