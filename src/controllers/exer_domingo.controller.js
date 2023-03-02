import { create_exer_domingo } from "../repositories/exer_domingo.repository"

export const create = async(req,res)=>{
    try {
        const domingo = await create_exer_domingo(req.body)
        res.status(200).send(domingo)
    } catch (error) {
        res.status(400).send(error)
    }
}