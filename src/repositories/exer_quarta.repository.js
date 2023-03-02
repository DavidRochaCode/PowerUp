import { prisma } from "../services/prisma";

export const create_exer_quarta = async(data) =>{
    const exer_quarta = await prisma.exerQuarta.create({
        data
    })
    return exer_quarta
}