import type {
  ClientProperties,
  Example,
} from "@/types/client-properties.schema";

const example: Example = {
  bar: "foo",
  foo: "helloworld",
};

export const properties: ClientProperties = {
  example,
};
