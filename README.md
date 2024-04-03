# trigger.dev v3 pnpm monorepo

Things to note:

- The trigger.dev code lives in the packages/trigger directory, a private package
- The `apps/web` Next.js app has a workspace dependency on `@repo/trigger`
- The `apps/web` Next.js app triggers the example hello world task in `app/actions` which is a server action
- The page.tsx is marked as a client component
- The TRIGGER_SECRET_KEY must be set in the `.env.local` in `apps/web`
- You'll need to set a project reference in the `packages/trigger/trigger.config.ts` file
- The `@trigger.dev/sdk` and `trigger.dev` packages are installed using a prerelease snapshot `0.0.0-v3-pnpm-fix-20240403154252`
- I've installed the `trigger.dev` package as a dev dep of `packages/trigger` and created a `dev` script so you should be able to run `pnpm run dev --filter @repo/trigger` from the monorepo root or just `pnpm run dev` from the `packages/trigger` dir
- In your Next.js logs, you might see a bunch of errors like below, which I'm working on fixing now (but the triggering works fine)

```
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/index.js
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/index.js
web:dev: ../../node_modules/.pnpm/@trigger.dev+core@0.0.0-v3-pnpm-fix-20240403154252_supports-color@9.4.0/node_modules/@trigger.dev/core/dist/v3/index.mjs
web:dev: ../../node_modules/.pnpm/@trigger.dev+sdk@0.0.0-v3-pnpm-fix-20240403154252/node_modules/@trigger.dev/sdk/dist/v3/index.mjs
web:dev: ../../packages/trigger/src/example.ts
web:dev: ./app/actions.ts
web:dev:
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/node.js
web:dev: Module not found: ESM packages (supports-color) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
web:dev:
web:dev: Import trace for requested module:
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/node.js
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/index.js
web:dev: ../../node_modules/.pnpm/socket.io-client@4.7.5_supports-color@9.4.0/node_modules/socket.io-client/build/esm-debug/index.js
web:dev: ../../node_modules/.pnpm/@trigger.dev+core@0.0.0-v3-pnpm-fix-20240403154252_supports-color@9.4.0/node_modules/@trigger.dev/core/dist/v3/index.mjs
web:dev: ../../node_modules/.pnpm/@trigger.dev+sdk@0.0.0-v3-pnpm-fix-20240403154252/node_modules/@trigger.dev/sdk/dist/v3/index.mjs
web:dev: ../../packages/trigger/src/example.ts
web:dev: ./app/actions.ts
web:dev:  ⚠ ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js
web:dev: Critical dependency: the request of a dependency is an expression
web:dev:
web:dev: Import trace for requested module:
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/index.js
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/index.js
web:dev: ../../node_modules/.pnpm/@opentelemetry+instrumentation@0.49.1_@opentelemetry+api@1.8.0_supports-color@9.4.0/node_modules/@opentelemetry/instrumentation/build/esm/index.js
web:dev: ../../node_modules/.pnpm/@trigger.dev+core@0.0.0-v3-pnpm-fix-20240403154252_supports-color@9.4.0/node_modules/@trigger.dev/core/dist/v3/index.mjs
web:dev: ../../node_modules/.pnpm/@trigger.dev+sdk@0.0.0-v3-pnpm-fix-20240403154252/node_modules/@trigger.dev/sdk/dist/v3/index.mjs
web:dev: ../../packages/trigger/src/example.ts
web:dev: ./app/actions.ts
web:dev:
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/node.js
web:dev: Module not found: ESM packages (supports-color) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
web:dev:
web:dev: Import trace for requested module:
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/node.js
web:dev: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/index.js
web:dev: ../../node_modules/.pnpm/socket.io-client@4.7.5_supports-color@9.4.0/node_modules/socket.io-client/build/esm-debug/index.js
web:dev: ../../node_modules/.pnpm/@trigger.dev+core@0.0.0-v3-pnpm-fix-20240403154252_supports-color@9.4.0/node_modules/@trigger.dev/core/dist/v3/index.mjs
web:dev: ../../node_modules/.pnpm/@trigger.dev+sdk@0.0.0-v3-pnpm-fix-20240403154252/node_modules/@trigger.dev/sdk/dist/v3/index.mjs
web:dev: ../../packages/trigger/src/example.ts
web:dev: ./app/actions.ts
```

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```
