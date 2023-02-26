import { prisma } from "../services/prisma";

export const create_exer_peitoral = async(data) =>{
    const exer_peitoral = await prisma.exer_peitoral.create({
        data
    })
    return exer_peitoral
}