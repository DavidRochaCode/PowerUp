import{create_exer_segunda, getAll, getById,updateSegunda, deleteSegunda} from '../repositories/exer_segunda.repository'

export const create = async(req,res)=>{
    try {
        const segunda = await create_exer_segunda(req.body)
        res.status(200).send(segunda)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const segunda = await getAll()
        res.status(200).send(segunda)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const segunda = await getById(Number(req.params.id))
        res.status(200).send(segunda)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const segunda = await updateSegunda(Number(req.params.id),req.body)
        res.status(200).send(segunda)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteSegunda(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}