const { response } = require("express")
const jwt = require ("jsonwebtoken")

exports.veryToken = async(req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).send({
            message: "Token é obrigatório"
        })
    }

    try {
        const replace = token.replace("Bearer ", "")
        const decoded = jwt.verify(replace, process.env.TOKEN_KEY, data)
        next()
    } catch (error) {
        return res.status(401).send({message: "Credenciais inválidas"})
        
    }
}