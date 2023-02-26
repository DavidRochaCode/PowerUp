import { prisma } from "../services/prisma";

export const create_gluteo_treino = async(data) =>{
    const gluteo_treino = await prisma.gluteo_treino.create({
        data
    })
    return gluteo_treino
}