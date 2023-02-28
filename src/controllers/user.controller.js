import{create_usuario} from '../repositories/usuario.repository'

export const create = async(req,res)=>{
    try {
        const usuario = await create_usuario(req.body)
        res.status(200).send(usuario)
    } catch (error) {
        res.status(400).send(error)
    }
}