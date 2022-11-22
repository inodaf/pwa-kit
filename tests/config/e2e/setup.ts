import dotenv from "dotenv";
import { PlaywrightTestConfig } from "@playwright/test";

dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: "../../e2e/",
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: process.env.E2E_BASE_URL },
};

export default config;
