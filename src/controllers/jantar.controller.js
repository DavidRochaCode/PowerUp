import{create_jantar} from '../repositories/jantar.repository'

export const create = async(req,res)=>{
    try {
        const jantar = await create_jantar(req.body)
        res.status(200).send(jantar)
    } catch (error) {
        res.status(400).send(error)
    }
}