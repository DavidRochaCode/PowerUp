import { prisma } from "../services/prisma";

export const create_alimento = async(data) =>{
    const alimento = await prisma.alimento.create({
        data
    })
    return alimento
}