import{create_treino} from '../repositories/treino.repository'

export const create = async(req,res)=>{
    try {
        const treino = await create_treino(req.body)
        res.status(200).send(treino)
    } catch (error) {
        res.status(400).send(error)
    }
}