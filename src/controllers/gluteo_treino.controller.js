import{create_gluteo_treino} from '../repositories/gluteoTreino.reposiory'

export const create = async(req,res)=>{
    try {
        const gluteoTreino = await create_gluteo_treino(req.body)
        res.status(200).send(gluteoTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}