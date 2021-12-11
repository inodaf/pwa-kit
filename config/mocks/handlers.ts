import { rest } from "msw";

export const handlers = [
  rest.get("http://msw.io", (req, res, ctx) => res(ctx.status(200))),
];
