import { Request, Response } from "express";
import { matchedData } from "express-validator";
import UserModel from "../models/users";
import { handleHttpError } from "../utils/handleError";
import { tokenSign } from "../utils/handleJWT";
import { encrypt, compare } from '../utils/handlePassword';

export const registerController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqFilter = matchedData(req);
    const password = await encrypt(reqFilter.password);
    const body = { ...reqFilter, password };
    const dataUser = await UserModel.create(body);

    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const reqFilter = matchedData(req);
    const user = await UserModel.findOne({ email: reqFilter.email }).select("password name role email");
    if (!user) return handleHttpError(res, "ERROR_NOT_EXITS", 404);

    const hashPassword = user.password;
    const check = await compare(reqFilter.password, <string>hashPassword);

    if (!check) return handleHttpError(res, "PASSWORD_INVALID", 401);
    
    user.set("password", undefined, {strict: false})
    
    const data = {
      token: tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (e) {
    console.log({ e });
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};
