import { prisma } from "../services/prisma";

export const create_coxa_treino = async(data) =>{
    const coxa_treino = await prisma.coxa_treino.create({
        data
    })
    return coxa_treino
}