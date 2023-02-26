import { prisma } from "../services/prisma";

export const create_exer_panturrulha = async(data) =>{
    const exer_panturrilha = await prisma.exer_panturrilha.create({
        data
    })
    return exer_panturrilha
}