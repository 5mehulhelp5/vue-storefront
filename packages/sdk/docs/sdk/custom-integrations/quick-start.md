
## Creating an integration SDK module via CLI

:::warning
This section covers how to create an integration SDK module. If you're looking for a ready-to-use integration, please check out the [Modules](../modules/index.md) section.
:::

You can get a huge head start by using the CLI to generate the boilerplate for your integration SDK module. To do that, run the following command:

[//]: # (//TODO: add link to the boilerplate)
```bash 
npx @vsf create integration
```

The CLI will ask you a few questions about your integration and generate the boilerplate for you.


### Running the application

Let's run the application and see what we've got:

```bash
yarn dev
```

:::warning
If you have any issues specific to this Boilerplate, please report them on the [vuestorefront/integration-boilerplate](https://github.com/vuestorefront/integration-boilerplate)
:::

But first, let's take a look at the boilerplate structure.

### Boilerplate structure
:::tip
To make things easier, we use a lerna mono-repo to manage the boilerplate. 
It allows us to manage dependencies and publish packages more efficiently. 
If you're unfamiliar with lerna, please check out the [lerna documentation](https://lerna.js.org/).
:::

- `packages/api-client` - contains the API client for your integration. It's a set of functions that will be used to communicate with the backend API.
- `packages/sdk` - contains the SDK module for your integration. It's a set of functions that will be used to communicate with the API client from the frontend application.
- `playground/app` - contains an application with the SDK module and API client already integrated. It's a great place to see your integration in action.
   You choose the type of application you want to use as a playground during the boilerplate generation process.
- `playground/middleware` - contains a middleware that will communicate with the api-client.

### Creating a new Endpoint

Let's create a new endpoint in the API client.
```bash
npx @vsf add endpoint getProduct
```

Let's check out what's been generated for us:

API Client:
- `packages/api-client/src/api/getProduct/index.ts` - contains the `getProduct` endpoint.
- `packages/api-client/src/api/index.ts` - contains the `getProduct` endpoint export.
- `packages/api-client/src/types/api/endpoints.ts` - contains the `getProduct` endpoint exported interface method.

SDK:
- `packages/sdk/src/methods/getProduct/index.ts` - contains the `getProduct` SDK method.
- `packages/sdk/src/methods/index.ts` - contains the `getProduct` SDK method export.

Playground:
- `playground/app/pages/index.vue` - contains the `getProduct` endpoint usage example.

:::warning
Be sure to rebuild the application before running it. Otherwise, the endpoint won't be available:
:::

```bash
yarn build && yarn dev
```

Now you can check out `http://localhost:3000/getProduct` in the browser to see the `getProduct` endpoint in action.

In the following sections you will learn more about the API client and SDK module.