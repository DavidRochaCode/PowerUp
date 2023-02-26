import { prisma } from "../services/prisma";

export const create_exer_coxa = async(data) =>{
    const exer_coxa = await prisma.exer_coxa.create({
        data
    })
    return exer_coxa
}