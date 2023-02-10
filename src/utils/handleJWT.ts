import jwt from "jsonwebtoken";
const JWT_SECRET = <string>process.env.JWT_SECRET;

/**
 * Debes pasa el objeto del usuario o lo que se quiere guardar en el encriptado central
 * @param {*} user
 */
export const tokenSign = (user: any) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

/**
 * Debes pasar el token de sesion JWT
 * @param {*} tokenJwt
 * @returns
 */
export const verifyToken = (tokenJwt: string) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};
