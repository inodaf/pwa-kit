import { resolve } from "node:path";
import dotenv from "dotenv-flow";
import { PlaywrightTestConfig } from "@playwright/test";

dotenv.config({
  node_env: "test",
  path: resolve(process.cwd(), "./config/envs"),
});

const config: PlaywrightTestConfig = {
  testDir: "../../tests/e2e/",
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: process.env.E2E_BASE_URL },
};

export default config;
