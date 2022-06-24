require("dotenv").config({ path: "../.env" })

const config = {
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  
  database: {
    dbHost: process.env.HOSTDB,
    dbUsername: process.env.USERNAMEDB,
    dbPassword: process.env.PASSWORDDB,
    dbName: process.env.DATABASEDB,
    ssl: true,
  },

  constants: {
    sql: {
      sucess: "Query Executada",
    },
    http: {
      sucess: "Requisição bem sucedida",
    },
  },
}

module.exports = config
