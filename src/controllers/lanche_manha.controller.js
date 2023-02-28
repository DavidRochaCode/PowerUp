import{create_lanche_manha} from '../repositories/lancheManha.repository'

export const create = async(req,res)=>{
    try {
        const lanche = await create_lanche_manha(req.body)
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}