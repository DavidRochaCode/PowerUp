import { prisma } from "../services/prisma";

export const create_exer_quarta = async(data) =>{
    const exer_quarta = await prisma.exerQuarta.create({
        data
    })
    return exer_quarta
}

//listar todas as colunas

export const getAll = async() =>{
    const quarta = await prisma.exerQuarta.findMany({})
    return quarta
}

//listar pelo id

export const getById = async(id) =>{
    const quarta = await prisma.exerQuarta.findUnique({
        where:{
            id
        }
    })
    return quarta
}

//atualizar tabela
export const updateQuarta = async(id, data) => {
    const quarta =  await prisma.exerQuarta.update({
        where:{
            id
        },
        data
    })
    return quarta
}

//deletar da tabela

export const deleteQuarta = async(id) => {
    await prisma.exerQuarta.delete({
        where:{
            id
        }
    })
    return
}