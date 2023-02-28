import { prisma } from "../services/prisma";

export const create_usuario = async(data) =>{
    const user = await prisma.usuario.create({
        data,
        select:{
            id:true,
            nome:true,
            senha:false,
            email:true,
            peso:true,
            altura:true,
            genero:true,
            fator_atividade:true,
            imc:true,
            dieta:true,



        }
    })
    return user
}