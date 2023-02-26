import { prisma } from "../services/prisma";

export const create_panturrilha_treino = async(data) =>{
    const panturrilha_treino = await prisma.panturrilha_treino.create({
        data
    })
    return panturrilha_treino
}