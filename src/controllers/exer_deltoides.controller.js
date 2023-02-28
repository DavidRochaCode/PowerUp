import{create_exer_deltoides} from '../repositories/exerDeltoides.repository'

export const create = async(req,res)=>{
    try {
        const deltoides = await create_exer_deltoides(req.body)
        res.status(200).send(deltoides)
    } catch (error) {
        res.status(400).send(error)
    }
}