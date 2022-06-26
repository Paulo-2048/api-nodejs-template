const database = require("./database/connectionDB")
const userDatabase = require("./database/userExampleDb")
const userModel = require("./models/userExampleModel")

const db = new database()
const user1 = new userModel("Ramis", "ramis@email.com", 123456)

const userDb = new userDatabase(db.con)
userDb.setUser(user1).then((result) => {
  console.log(result)
})
