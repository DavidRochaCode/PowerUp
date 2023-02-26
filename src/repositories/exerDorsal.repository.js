import { prisma } from "../services/prisma";

export const create_exer_dorsal = async(data) =>{
    const exer_dorsal = await prisma.exer_dorsal.create({
        data
    })
    return exer_dorsal
}