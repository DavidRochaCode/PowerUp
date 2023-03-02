import { prisma } from "../services/prisma";

export const create_exer_terca = async(data) =>{
    const exer_terca = await prisma.exerTerca.create({
        data
    })
    return exer_terca
}