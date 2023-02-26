import { prisma } from "../services/prisma";

export const create_lanche_tarde = async(data) =>{
    const lanche_tarde = await prisma.lanche_tarde.create({
        data
    })
    return lanche_tarde
}