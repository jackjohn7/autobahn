import { object, string, parse } from "valibot";

const clientSchema = object({});

export const clientEnv = parse(clientSchema, process.env);

const serverSchema = object({
  DB: object({
    URL: string()
  })
});

export const serverEnv = parse(serverSchema ,process.env);
