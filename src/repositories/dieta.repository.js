import { prisma } from "../services/prisma";

export const create_dieta = async(data) =>{
    const dieta = await prisma.dieta.create({
        data
    })
    return dieta
}