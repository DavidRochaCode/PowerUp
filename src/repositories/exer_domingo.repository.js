import { prisma } from "../services/prisma";

export const create_exer_domingo = async(data) =>{
    const exer_domingo = await prisma.exerDomingo.create({
        data
    })
    return exer_domingo
}