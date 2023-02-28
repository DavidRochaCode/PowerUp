import{create_exer_coxa} from '../repositories/exerCoxa.repository'

export const create = async(req,res)=>{
    try {
        const coxa = await create_exer_coxa(req.body)
        res.status(200).send(coxa)
    } catch (error) {
        res.status(400).send(error)
    }
}