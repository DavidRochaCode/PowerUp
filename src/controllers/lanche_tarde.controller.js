import{create_lanche_tarde} from '../repositories/lancheTarde.repository'

export const create = async(req,res)=>{
    try {
        const lanche = await create_lanche_tarde(req.body)
        res.status(200).send(lache)
    } catch (error) {
        res.status(400).send(error)
    }
}