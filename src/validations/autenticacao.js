const {z} = require("zod")

exports.autenticacaoValidation = z.object({
    email: z.string(),
    senha: z.string(),
})