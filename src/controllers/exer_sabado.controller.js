import { create_exer_sabado } from "../repositories/exer_sabado.repository"

export const create = async(req,res)=>{
    try {
        const sabado = await create_exer_sabado(req.body)
        res.status(200).send(sabado)
    } catch (error) {
        res.status(400).send(error)
    }
}