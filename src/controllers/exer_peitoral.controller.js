import{create_exer_peitoral} from '../repositories/exerPeitoral.repository'

export const create = async(req,res)=>{
    try {
        const peitoral = await create_exer_peitoral(req.body)
        res.status(200).send(peitoral)
    } catch (error) {
        res.status(400).send(error)
    }
}