import { prisma } from "../services/prisma";

export const create_deltoides_treino = async(data) =>{
    const deltoides_treino = await prisma.deltoides_treino.create({
        data
    })
    return deltoides_treino
}