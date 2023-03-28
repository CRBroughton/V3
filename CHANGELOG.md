# v3

## 0.2.2

### General changes

#### Type safe env support

V3 now support a type-safe env configuration; You can use the `envConfig.ts` file to
configure this feature. Please note that for use in production, this will also take effect.


#### Testing

I've added support for testing the TRPC procedures, as well as components using Vitest.
I've included a few example tests for demonstration purposes, as well as several commands for Vitest,
including the experimental Vitest UI.

### Configuration changes

The included settings.json file for VSCode has been updated to enable you to hide certain files/folders
that aren't prudent for day-to-day development.

### Dependency upgrades

- update eslint-config to 0.37.0
- update changeset to 2.26.1
- update @nuxt/devtools to 0.3.1
- update @nuxt/test-utils to 3.2.2
- update @sidebase/nuxt-auth to 0.4.4
- update @types/node to 18.15.0
- update @vitejs/plugin-vue to 4.1.0
- update @vue/test-utils to 2.3.2
- update autoprefixer to 10.4.14
- update eslint to 8.36.0
- update jsdom to 21.1.1
- update nuxt to 3.3.2
- update prisma to 4.12.0
- update tailwind to 3.3.0
- update vitest to 0.29.8
- update to next-auth to 4.20.1
- update trpc to 10.18.0
- update next-auth to 4.20.1
- update trpc-nuxt to 0.8.0
- update zod to 3.21.4
- update ts-pattern to 4.2.2

## 0.2.1

- update trpc to 10.13.2
- update nuxt to 3.2.3
- update prisma to 4.11.0
- fix auth origin in production
- adjust error handling with nuxtErrorBoundary

## 0.2.0

- update nuxt to 3.2.2
- update ts-pattern to 4.2.1
- update @types/node to 18.14.0
- update zod to 3.20.6
- update trpc-nuxt to 0.7.0
- update typescript to 4.9.5
- update trpc to 10.12.0
- update eslint to 8.35.0
- update @types/node to 18.14.0
- update vue-tsc to 1.2.0
- update prisma to 4.10.1
- update tailwindcss to 3.2.7

## 0.1.0

- cb78a9a: update nuxt to 3.1.1
- 1a6da46: add changeset support
- d00c194: update prisma to 4.9.0
- add additional package.json commands
