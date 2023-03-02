import { create_exer_quarta } from "../repositories/exer_quarta.repository"

export const create = async(req,res)=>{
    try {
        const quarta = await create_exer_quarta(req.body)
        res.status(200).send(quarta)
    } catch (error) {
        res.status(400).send(error)
    }
}