import { prisma } from "../services/prisma";

export const create_jantar = async(data) =>{
    const jantar = await prisma.jantar.create({
        data
    })
    return jantar
}

//listar todas as colunas

export const getAll = async() =>{
    const jantar = await prisma.jantar.findMany({})
    return jantar
}

//listar pelo id

export const getById = async(id) =>{
    const jantar = await prisma.jantar.findUnique({
        where:{
            id
        }
    })
    return jantar
}

//atualizar tabela
export const updateJantar = async(id, data) => {
    const jantar =  await prisma.jantar.update({
        where:{
            id
        },
        data
    })
    return jantar
}

//deletar da tabela

export const deleteJantar = async(id) => {
    await prisma.jantar.delete({
        where:{
            id
        }
    })
    return
}

export const deleteTudo = async() => {
    await prisma.jantar.deleteMany({})
    return deleteTudo
}