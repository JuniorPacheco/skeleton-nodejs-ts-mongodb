import express, { Router } from "express";
import { registerController, loginController } from '../controllers/auth.controller';
import {
  validatorRegister,
  validatorLogin,
} from "../validators/auth.validator";

const router: Router = express.Router();

router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

export { router };
