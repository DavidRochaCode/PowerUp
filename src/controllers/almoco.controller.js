import{create_almoco} from '../repositories/almoco.repository'

export const create = async(req,res)=>{
    try {
        const almoco = await create_almoco(req.body)
        res.status(200).send(almoco)
    } catch (error) {
        res.status(400).send(error)
    }
}