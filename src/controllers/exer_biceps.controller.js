import{create_exer_biceps} from '../repositories/exerBiceps.repository'

export const create = async(req,res)=>{
    try {
        const biceps = await create_exer_biceps(req.body)
        res.status(200).send(biceps)
    } catch (error) {
        res.status(400).send(error)
    }
}