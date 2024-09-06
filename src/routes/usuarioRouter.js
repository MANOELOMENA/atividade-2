import { Router } from "express";
import {checkUser, editUser, getUserById, login, register} from "../controllers/usuarioController"


//MIDDLEWARES
import verifyToken from "../helpers/verify-token.js"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/checkuser", checkUser)
router.get("/:id", getUserById)
router.put("/edit/:id", verifyToken, editUser)

export default router