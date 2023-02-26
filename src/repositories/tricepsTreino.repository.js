import { prisma } from "../services/prisma";

export const create_triceps_treino = async(data) =>{
    const triceps_treino = await prisma.triceps_treino.create({
        data
    })
    return triceps_treino
}