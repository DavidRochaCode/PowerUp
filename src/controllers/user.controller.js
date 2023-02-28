import{create_usuario} from '../repositories/usuario.repository'
import bcrypt from 'bcrypt'

export const create = async(req,res)=>{
    try {
        const hashPassword = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashPassword
        const usuario = await create_usuario(req.body)
        res.status(200).send(usuario)
    } catch (error) {
        res.status(400).send(error)
    }
}