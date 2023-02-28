import{create_exer_triceps} from '../repositories/exerTriceps.repository'

export const create = async(req,res)=>{
    try {
        const triceps = await create_exer_triceps(req.body)
        res.status(200).send(triceps)
    } catch (error) {
        res.status(400).send(error)
    }
}