import express, { Router } from "express";
import { readdirSync } from "fs";
const router: Router = express.Router();

const PATH_ROUTES: string = __dirname;

const removeExtension = (filename: string): string => {
  return <string>filename.split(".").shift();
};

const loadRouter = (file: string): void => {
  const name = removeExtension(file);
  if (name !== "index") {
    import(`./${file}`).then((routerModule) => {
      console.log(`Loading route ${name}`);
      router.use(`/${name}`, routerModule.router);
    });
  }
};

readdirSync(PATH_ROUTES).filter((file) => loadRouter(file));

export default router;
