import { prisma } from "../services/prisma";

export const create_jantar = async(data) =>{
    const jantar = await prisma.jantar.create({
        data
    })
    return jantar
}