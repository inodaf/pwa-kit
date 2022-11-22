/* eslint-disable @typescript-eslint/no-var-requires */
import merge from "lodash.merge";
import type { ServerProperties } from "@/types/server-properties.schema";

const env = process.env.APP_ENV as string;
const base: ServerProperties = require(`./base`).properties;
const envs: ServerProperties = require(`./${env}`).properties;

export const properties = merge(base, envs) as ServerProperties;
