import { prisma } from "../services/prisma";

export const create_lanche_manha = async(data) =>{
    const lanche_manha = await prisma.lanche_manha.create({
        data
    })
    return lanche_manha
}