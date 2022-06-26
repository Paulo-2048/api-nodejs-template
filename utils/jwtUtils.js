const jwt = require("jsonwebtoken")
const config = require("../config/config")
const userDatabase = require("../api/database/userExampleDb")
const Database = require("../api/database/connectionDB")

exports.jwtGenerate = (id) => {
  // # No expires
  try {
    let result = jwt.sign(
      {
        id: id,
      },
      config.jwtSecret
    )
    return result
  } catch (err) {
    return err
  }
}

exports.jwtVerify = (token) => {
  try {
    let result = jwt.verify(token, config.jwtSecret)
    return result
  } catch (err) {
    return err
  }
}

exports.jwtDecode = (token) => {
  try {
    let result = jwt.decode(token, config.jwtSecret)
    return result
  } catch (err) {
    return err
  }
}

// exports.jwtRefresh = async (token) => { # Function to refrensh token
//   const db = new Database()
//   const userDb = new userDatabase(db.con)
//   try {
//     console.log("a")
//     try {
//       return (result = jwt.verify(token, config.jwtSecret))
//     } catch {
//       return (result = jwt.verify(token, config.jwtRefreshSecret))
//     }

//     console.log("b")
//     let userList = await userDb.getUser()
//     console.log(userList)
//     for (let index = 0; index < userList.length; index++) {
//       const userId = userList[index].iduser
//       console.log(userId)
//       console.log("x")
//       console.log(userId, result.id)
//       if (userId == result.id) {
//         let refreshToken = jwt.sign(
//           { id: result.id },
//           config.jwtRefreshSecret,
//           { expiresIn: 300 }
//         )
//         console.log("d")
//         return refreshToken
//       }
//     }
//   } catch (err) {
//     return err
//   }
// }
