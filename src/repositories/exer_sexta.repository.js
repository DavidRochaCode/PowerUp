import { prisma } from "../services/prisma";

export const create_exer_sexta = async(data) =>{
    const exer_sexta = await prisma.exerSexta.create({
        data
    })
    return exer_sexta
}