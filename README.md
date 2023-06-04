<h1>
  <img src="./.github/projecticon.svg" width="96" alt="an icon with tones of purple background and 4 lines representing a fast motion." />
  <div>
    PWA Kit · Enterprise Apps
    <div>
      <img src="https://img.shields.io/badge/TypeScript-Next.js%20-white.svg" />
      <img src="https://img.shields.io/badge/Testing-Jest-pink.svg" />
      <img src="https://img.shields.io/badge/Format-Prettier-coral.svg" />
      <img src="https://img.shields.io/badge/Linting-TypeScript_ESLint-blue.svg" />
      <img src="https://img.shields.io/badge/Node.js-v18.16.0-green.svg" />
    </div>
  </div>
</h1>

Starting a new Web App needs to be easy. **PWA Kit** provides a fully featured environment with **Next.js** + **TypeScript** and let you focus on code delivery without compromising best practices.

## The Stack

**Base**

- ⚡️ **Next.js** with TypeScript + Paths
- 📱 First Class **PWA Support**
- 🍃 Application Properties for `Production`, `Staging` and `Development`
- 👩‍🎤 **CSS Styling** with [TailwindCSS](https://tailwindcss.com) or CSS Modules
- ⚛️ Support for [React Query](https://react-query.tanstack.com)
- 🔒 Automatic local **HTTPS** with [Caddy](https://caddyserver.com)

**Quality**

- 🧑‍🔬 Testing with [Jest](https://jestjs.io) + swc + @testing-library + **Coverage Reports**
- 🐞 Linting with [TypeScript ESLint](https://typescript-eslint.io)
- 📝 Code Format with [Prettier](https://prettier.io)
- 🥸 GraphQL and REST API mocking with [MSW](https://mswjs.io)
- 🌲 E2E Tests with [Playwright](https://playwright.dev/)

**Security**

- 👮‍♂️ Support for **Content-Security-Policy**
- 🔍 CI **Sec Inspection** with [Mozilla Observatory](https://observatory.mozilla.org/) _soon_

**Accessibility**

- 🧏‍♀️ Linting JSX _a11y_ with [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- 🪓 Testing with [Axe Core](https://github.com/dequelabs/axe-core) _soon_

**Performance**

- 📊 Core Web Vitals Report
- 🚥 Lighthouse CI + Bundlesize _soon_

**CI + Deployment**

- 📍 **GitHub Actions** for Test, Lint and Format
- 🚀 Deployment + Branch Preview _soon_

---

## Getting Started

Base commands for develop, test and build.

**Requirements**

- Node.js Toolchain Manager: [Volta](https://volta.sh)
- Package Manager: [pnpm](https://pnpm.io/installation)
- HTTP(S) Web Server: [Caddy](https://caddyserver.com/) *optional

**Prepare Development**

A **Makefile** is used to orchestrate the installation of required tooling and dependencies. Open your Terminal app and run the command bellow, then you are able to get started. **Make sure to install Caddy to enable HTTPS on Dev.**

```sh
make
```

> **Note**
>
> In case of failure, head to the [**Troubleshooting**](#troubleshooting) section below for alternatives.

**Development Server**

The next command will spawn the Dev Server and load the environment variables from `.env`.

```sh
pnpm dev        # spawns the Dev Server at http://localhost:3000
pnpm dev:secure # spawns Caddy and the Dev Server at https://localhost:3000
```

**Testing**

There are **Integration**, **Unit** and **E2E** tests available and the matching test environment variables (`.env.test`) are automatically loaded. With the exception of E2E tests, these commands are also used for CI environments.

```sh
# Unit & Integration Tests
pnpm test     # run tests without watch
pnpm test:w   # run tests with watch
pnpm test:c   # run tests with coverage
pnpm t        # alias for `pnpm test`
```

```sh
# E2E Tests
pnpm test:e2e # runs with **dev server** as Base URL
```

**Linting & Code Formatting**

We split the process into Check and Fix commands.

```sh
# Linting
pnpm lint:check # checks linting without fixing (useful for CI)
pnpm lint       # checks linting and fixes issues
```

```sh
# Code Formatting
pnpm fmt:check # checks formatting without fixing (useful for CI)
pnpm fmt       # checks formatting and fixes issues
```

---

## Environment Variables

Sensitive and secret data can be defined using Environment Variables. An `.env` file at the root directory can be used for storing these data. As per security `.env` files cannot be tracked through version control systems.

## Application Properties

Application properties let you define environment-specific, static configuration for your system. Unlike Environment Variables, Properties cannot include sensitive values.

There are the `base`, `dev`, `production` and `staging` properties but it's possible to add many others, as they are named based on the value of `APP_ENV` and `NEXT_PUBLIC_APP_ENV` environment variable. Also they are separated by `client` and `server`.

The properties from `base` holds all the default configuration that applies for all environments. Overriding these values is made possible by using the environment specific property file, like `dev`.

In short, when `APP_ENV` and `NEXT_PUBLIC_APP_ENV` is set to `production`, `base` and `production` property files will be loaded and merged. Then they can be accessed through the application as bellow:

```ts
import { serverProperties } from "@/config/properties/server";
import { clientProperties } from "@/config/properties/client";
```

---

## Building

Builds are separated by environments: Production and Staging. For both environments the `NODE_ENV` is set to `production`.

**Production**

```sh
pnpm build:prod # build with production bindings
pnpm start:prod # start the built app with production bindings
```

**Staging**

```sh
pnpm build:stag # build with staging bindings
pnpm start:stag # start the built app with staging bindings
```

## Cleanup

Whenever you need a fresh start in case something is going wrong, you can leverage handy cleanup commands.

```sh
pnpm cleanup      # remove caches and temp files
pnpm cleanup:hard # same as above but also remove `node_modules`
```

---

## Troubleshooting

**Fail while using the `make` command:** Behind the scenes this command depends on `cURL` for downloading Volta and pnpm binaries. Try installing cURL then run the command again. Also, the commands from Makefile are **not supported on Windows** machines so the alternative is to manually installing the required dependencies.

---

## License

Although this **template** is MIT licensed, if needed, you must change the license after creating your project.
