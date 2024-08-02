const {Router} = require("express")
const { GetUser } = require("../controllers/userController")

const router = Router()

router.get("/user", GetUser)

module.exports = router