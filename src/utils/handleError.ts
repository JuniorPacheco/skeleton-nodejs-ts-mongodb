import { Response } from "express";

export const handleHttpError = (
  res: Response,
  message: string = "Algo sucedió",
  code: number = 403
): void => {
  res.status(code);
  res.send({ error: message });
};
