import bcrypt from "bcrypt"
import{create_conta, getAll, getById,updateConta, deleteConta} from '../repositories/conta.repository'
const{veryfyToken} = require("../middlewares/autenticacao")


export const create = async(req,res)=>{
    try {
        const hashPassword = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashPassword 
        const conta = await create_conta(req.body)
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req,res) =>{
    try {
        const conta = await getAll()
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getId = async(req,res) => {
    try {
        const conta = await getById(Number(req.params.id))
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async(req, res) => {
    try {
        const conta = await updateConta(Number(req.params.id),req.body)
        res.status(200).send(conta)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async(req, res) => {
    try {
        await deleteConta(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
    
}