/* eslint-disable @typescript-eslint/no-var-requires */
import merge from "lodash.merge";
import type { ClientProperties } from "@/types/client-properties.schema";

const env = process.env.NEXT_PUBLIC_APP_ENV as string;
const base: ClientProperties = require(`./base`).properties;
const envs: ClientProperties = require(`./${env}`).properties;

export const properties = merge(base, envs) as ClientProperties;
