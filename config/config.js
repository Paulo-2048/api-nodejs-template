const dotenv = require("dotenv")

dotenv.config({
  path: process.env.NODE_ENV === "local" ? ".env" : ".env.example",
})

module.exports = {
    jwtSecret: process.env.JWT_SECRET,

    database: {
        host: process.env.DB_HOST
    },

    constants: {
        sql: {
            sucess: 'Query Executada'
        },
        http: {
            sucess: 'Requisição bem sucedida'
        }
    }
}
