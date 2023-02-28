import{create_dorsal_treino} from '../repositories/dorsalTreino.repository'

export const create = async(req,res)=>{
    try {
        const dorsalTreino = await create_dorsal_treino(req.body)
        res.status(200).send(dorsalTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}