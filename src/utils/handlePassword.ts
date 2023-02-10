import bcryptjs from "bcryptjs";

export const encrypt = async (passwordPlain: string): Promise<string> => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain
 * @param {*} passwordHash
 * @returns
 */
export const compare = async (
  passwordPlain: string,
  passwordHash: string
): Promise<boolean> => {
  return bcryptjs.compare(passwordPlain, passwordHash);
};

