const express = require("express")
const app = express()
const config = require("../config/config")
const cors = require("cors")

app.use(cors({ origin: "*" }))
app.use(express.json({ extended: false }))

const userRoute = require("./routes/userExampleRoute")

app.use("/user", userRoute)

app.use("/", (req, res, next) => {
  res.status(200).send({
    msg: "Ok",
  })
})

const PORT = config.port || 3000
app.listen(PORT)
