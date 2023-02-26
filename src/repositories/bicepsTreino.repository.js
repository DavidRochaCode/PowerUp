import { prisma } from "../services/prisma";

export const create_biceps_treino = async(data) =>{
    const biceps_treino = await prisma.biceps_treino.create({
        data
    })
    return biceps_treino
}