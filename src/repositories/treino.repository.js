import { prisma } from "../services/prisma";

export const create_treino = async(data) =>{
    const treino = await prisma.treino.create({
        data
    })
    return treino
}