import{create_exer_segunda} from '../repositories/exer_segunda.repository'

export const create = async(req,res)=>{
    try {
        const segunda = await create_exer_segunda(req.body)
        res.status(200).send(segunda)
    } catch (error) {
        res.status(400).send(error)
    }
}