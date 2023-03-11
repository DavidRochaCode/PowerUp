import{create_lanche_manha, getAll, getById,updateLanche, deleteLanche, deleteTudo} from '../repositories/lancheManha.repository'

export const create = async(req,res)=>{
    try {
        const lanche = await create_lanche_manha(req.body)
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const lanche = await getAll()
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const lanche = await getById(Number(req.params.id))
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const lanche = await updateLanche(Number(req.params.id),req.body)
        res.status(200).send(lanche)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteLanche(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const deleteAll = async(req, res) =>{
    try{
        await deleteTudo()
        res.status(200).send("tudo deletado")
    }catch(error){
        console.log(error)
    }
}