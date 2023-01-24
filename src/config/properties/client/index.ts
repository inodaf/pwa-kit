import merge from "lodash/merge";

import base from "./base.json";
import dev from "./dev.json";
import staging from "./staging.json";
import production from "./production.json";

type Properties = typeof dev & typeof staging & typeof production;

let props: Properties = {} as Properties;

if (process.env.NEXT_PUBLIC_APP_ENV === "dev") props = dev;
if (process.env.NEXT_PUBLIC_APP_ENV === "staging") props = staging;
if (process.env.NEXT_PUBLIC_APP_ENV === "production") props = production;

export const clientProperties = merge(base, props);
