import { prisma } from "../services/prisma";

export const create_cafe = async(data) =>{
    const cafe = await prisma.cafe.create({
        data
    })
    return cafe
}