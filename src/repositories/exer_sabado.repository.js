import { prisma } from "../services/prisma";

export const create_exer_sabado = async(data) =>{
    const exer_sabado = await prisma.exerSabado.create({
        data
    })
    return exer_sabado
}