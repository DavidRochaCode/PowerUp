import{create_panturrilha_treino} from '../repositories/panturrilhaTreino.repository'

export const create = async(req,res)=>{
    try {
        const panturrilhaTreino = await create_panturrilha_treino(req.body)
        res.status(200).send(panturrilhaTreino)
    } catch (error) {
        res.status(400).send(error)
    }
}