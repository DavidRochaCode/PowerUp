import { create_exer_sexta, getAll, getById,updateSexta, deleteSexta } from "../repositories/exer_sexta.repository"

export const create = async(req,res)=>{
    try {
        const sexta = await create_exer_sexta(req.body)
        res.status(200).send(sexta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const sexta = await getAll()
        res.status(200).send(sexta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const sexta = await getById(Number(req.params.id))
        res.status(200).send(sexta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const sexta = await updateSexta(Number(req.params.id),req.body)
        res.status(200).send(sexta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteSexta(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}