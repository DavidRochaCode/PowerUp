import{create_exer_gluteo} from '../repositories/exerGluteo.repository'

export const create = async(req,res)=>{
    try {
        const gluteo = await create_exer_gluteo(req.body)
        res.status(200).send(gluteo)
    } catch (error) {
        res.status(400).send(error)
    }
}