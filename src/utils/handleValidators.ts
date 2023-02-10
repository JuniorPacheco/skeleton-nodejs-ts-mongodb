import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validatorResults = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (errors: any) {
    res.status(403);
    res.send({ errors: errors.array() });
  }
};

export default validatorResults;
