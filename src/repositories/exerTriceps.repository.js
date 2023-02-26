import { prisma } from "../services/prisma";

export const create_exer_triceps = async(data) =>{
    const exer_triceps = await prisma.exer_triceps.create({
        data
    })
    return exer_triceps
}