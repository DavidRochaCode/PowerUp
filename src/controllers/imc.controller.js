import{create_imc} from '../repositories/imc.repository'

export const create = async(req,res)=>{
    try {
        const imc = await create_imc(req.body)
        res.status(200).send(imc)
    } catch (error) {
        res.status(400).send(error)
    }
}