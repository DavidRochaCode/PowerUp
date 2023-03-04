import { prisma } from "../services/prisma";

//inserir na tabela

export const create_usuario = async(data) =>{
    const user = await prisma.usuario.create({
        data
    })
    return user
}

//listar todas as colunas

export const getAll = async() =>{
    const users = await prisma.usuario.findMany({})
    return users
}

//listar pelo id

export const getById = async(id) =>{
    const user = await prisma.usuario.findUnique({
        where:{
            id
        }
    })
    return user
}

//atualizar tabela
export const updateUser = async(id, data) => {
    const user =  await prisma.usuario.update({
        where:{
            id
        },
        data
    })
    return user
}

//deletar da tabela

export const deleteUser = async(id) => {
    await prisma.usuario.delete({
        where:{
            id
        }
    })
    return
}