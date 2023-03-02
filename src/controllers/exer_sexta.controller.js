import { create_exer_sexta } from "../repositories/exer_sexta.repository"

export const create = async(req,res)=>{
    try {
        const sexta = await create_exer_sexta(req.body)
        res.status(200).send(sexta)
    } catch (error) {
        res.status(400).send(error)
    }
}