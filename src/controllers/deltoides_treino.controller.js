import{create_deltoides_treino} from '../repositories/deltoidesTreino.repository'

export const create = async(req,res)=>{
    try {
        const deltoidesTreino = await create_deltoides_treino(req.body)
        res.status(200).send(deltoidesTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}