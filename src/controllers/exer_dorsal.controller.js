import{create_exer_dorsal} from '../repositories/exerDorsal.repository'

export const create = async(req,res)=>{
    try {
        const dorsal = await create_exer_dorsal(req.body)
        res.status(200).send(dorsal)
    } catch (error) {
        res.status(400).send(error)
    }
}