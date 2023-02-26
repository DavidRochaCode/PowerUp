import { prisma } from "../services/prisma";

export const create_almoco = async(data) =>{
    const almoco = await prisma.almoco.create({
        data
    })
    return almoco
}