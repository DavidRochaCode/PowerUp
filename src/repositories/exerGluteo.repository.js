import { prisma } from "../services/prisma";

export const create_exer_gluteo = async(data) =>{
    const exer_gluteo = await prisma.exer_gluteo.create({
        data
    })
    return exer_gluteo
}