const express = require("express")

const router = express.Router()

const {addNewUser, loginUser,getAllData} = require("../controllers/userController")

const creds_logger = require("../middlewares/creds_logger")

router.get("/all", getAllData)
router.post("/sign-up",creds_logger, addNewUser)
router.post("/log-in",creds_logger, loginUser)

module.exports = router
