const express = require("express")
const router = express.Router()

const userController = require("../controller/userExampleController")

router.get("/", userController.get)
router.get("/:id", userController.getById)
router.post("/", userController.set)
router.post("/update", userController.update)
router.post("/delete", userController.delete)

module.exports = router
