import { create_exer_terca } from "../repositories/exer_terca.repository"

export const create = async(req,res)=>{
    try {
        const terca = await create_exer_terca(req.body)
        res.status(200).send(terca)
    } catch (error) {
        res.status(400).send(error)
    }
}