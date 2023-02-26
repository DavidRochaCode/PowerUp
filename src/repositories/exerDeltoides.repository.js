import { prisma } from "../services/prisma";

export const create_exer_deltoides = async(data) =>{
    const exer_deltoides = await prisma.exer_deltoides.create({
        data
    })
    return exer_deltoides
}