import{create_exer_panturrulha} from '../repositories/exerPanturrilha.repository'

export const create = async(req,res)=>{
    try {
        const panturrilha = await create_exer_panturrulha(req.body)
        res.status(200).send(panturrilha)
    } catch (error) {
        res.status(400).send(error)
    }
}