import { prisma } from "../services/prisma";

export const create_usuario = async(data) =>{
    const user = await prisma.usuario.create({
        data
    })
    return user
}