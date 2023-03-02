import{create_imc, getAll, getById,updateTerca, deleteTerca} from '../repositories/imc.repository'

export const create = async(req,res)=>{
    try {
        const imc = await create_imc(req.body)
        res.status(200).send(imc)
    } catch (error) {
        res.status(400).send(error)
    }
}

/* export const get = async (req,res) =>{
    try {
        const imc = await getAll()
        res.status(200).send(imc)
    } catch (error) {
        res.status(400).send(error)
    }
} */

export const getId = async(req,res) => {
    try {
        const imc = await getById(Number(req.params.id))
        res.status(200).send(imc)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const imc = await updateimc(Number(req.params.id),req.body)
        res.status(200).send(imc)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteimc(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}