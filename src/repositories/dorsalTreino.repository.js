import { prisma } from "../services/prisma";

export const create_dorsal_treino = async(data) =>{
    const dorsal_treino = await prisma.dorsal_treino.create({
        data
    })
    return dorsal_treino
}