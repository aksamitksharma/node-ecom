const express = require("express")
const app = express()
const cors = require("cors")
const user_controller = require("./controllers/UserController");
require("./db/config")
app.use(express.json())
app.use(cors())

// Routes
app.post("/signup", user_controller.saveUser)
app.post("/login", user_controller.loginUser)

app.listen(5000);