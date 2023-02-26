import { prisma } from "../services/prisma";

export const create_exer_biceps = async(data) =>{
    const exer_biceps = await prisma.exer_biceps.create({
        data
    })
    return exer_biceps
}