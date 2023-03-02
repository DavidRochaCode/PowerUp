import { prisma } from "../services/prisma";

export const create_exer_quinta = async(data) =>{
    const exer_quinta = await prisma.exerQuinta.create({
        data
    })
    return exer_quinta
}

//listar todas as colunas

export const getAll = async() =>{
    const quinta = await prisma.exerQuinta.findMany({})
    return quinta
}

//listar pelo id

export const getById = async(id) =>{
    const quinta = await prisma.exerQuinta.findUnique({
        where:{
            id
        }
    })
    return quinta
}

//atualizar tabela
export const updateQuinta = async(id, data) => {
    const quinta =  await prisma.exerQuinta.update({
        where:{
            id
        },
        data
    })
    return quinta
}

//deletar da tabela

export const deleteQuinta = async(id) => {
    await prisma.exerQuinta.delete({
        where:{
            id
        }
    })
    return
}