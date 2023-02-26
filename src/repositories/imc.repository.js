import { prisma } from "../services/prisma";

export const create_imc = async(data) =>{
    const imc = await prisma.iMC.create({
        data
    })
    return imc
}