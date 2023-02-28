import{create_dieta} from '../repositories/dieta.repository'

export const create = async(req,res)=>{
    try {
        const dieta = await create_dieta(req.body)
        res.status(200).send(dieta)
    } catch (error) {
        res.status(400).send(error)
    }
}