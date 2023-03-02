import { prisma } from "../services/prisma";

export const create_exer_quinta = async(data) =>{
    const exer_quinta = await prisma.exerQuinta.create({
        data
    })
    return exer_quinta
}