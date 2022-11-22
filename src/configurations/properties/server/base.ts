import type {
  ServerProperties,
  Example,
} from "@/types/server-properties.schema";

const example: Example = {
  foo: "server-only",
};

export const properties: ServerProperties = {
  example,
};
