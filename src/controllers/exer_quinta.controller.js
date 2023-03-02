import { create_exer_quinta } from "../repositories/exer_quinta.repository"

export const create = async(req,res)=>{
    try {
        const quinta = await create_exer_quinta(req.body)
        res.status(200).send(quinta)
    } catch (error) {
        res.status(400).send(error)
    }
}