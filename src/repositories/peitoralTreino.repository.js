import { prisma } from "../services/prisma";

export const create_peitoral_treino = async(data) =>{
    const peitoral_treino = await prisma.peitoral_treino.create({
        data
    })
    return peitoral_treino
}