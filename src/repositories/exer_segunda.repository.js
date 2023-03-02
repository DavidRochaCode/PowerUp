import { prisma } from "../services/prisma";

export const create_exer_segunda = async(data) =>{
    const exer_segunda = await prisma.exerSegunda.create({
        data
    })
    return exer_segunda
}