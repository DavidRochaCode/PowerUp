import{create_cafe} from '../repositories/cafe.repository'

export const create = async(req,res)=>{
    try {
        const cafe = await create_cafe(req.body)
        res.status(200).send(cafe)
    } catch (error) {
        res.status(400).send(error)
    }
}