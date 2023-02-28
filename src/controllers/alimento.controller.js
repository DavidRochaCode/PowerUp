import{create_alimento} from '../repositories/alimento.repository'

export const create = async(req,res)=>{
    try {
        const alimento = await create_alimento(req.body)
        res.status(200).send(alimento)
    } catch (error) {
        res.status(400).send(error)
    }
}