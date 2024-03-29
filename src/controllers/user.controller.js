import{create_usuario, getAll, getById,updateUser, deleteUser} from '../repositories/usuario.repository'
import bcrypt from 'bcrypt'
import { userValidation } from '../validations/usuario'


export const create = async(req,res)=>{
    try {
        await userValidation.validate(req.body)
        const hashPassword = bcrypt.hashSync(req.body.senha, 10)
        req.body.senha = hashPassword
        const usuario = await create_usuario(req.body)
        res.status(200).send(usuario)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const users = await getAll()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const user = await getById(Number(req.params.id))
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const user = await updateUser(Number(req.params.id),req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteUser(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}