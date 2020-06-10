# Uniform Personalization for Sitecore on Cloudflare worker

A starter kit for Cloudflare worker to run edge personalization powered by Uniform.dev.

- `index.js` is the entry point for the worker, pre-wired with Uniform Personalization.

## Pre-requisites

1. Install [Wrangler CLI](https://github.com/cloudflare/wrangler)
1. npm token provided by the folks @ Uniform ([contact us](mailto:hi@unfrm.io) for details).
1. Sitecore XP back-end (8.2 => 9.3 version) with Uniform Personalization module installed and configured.
1. Access to Cloudflare console with ability to provision the worker and configure the setup with the origin.

## Setup

1. Provide `account_id` and `zone_id` in `wrangler.toml` file from your Cloudflare account. See official Cloudflare documentation for this [here](https://developers.cloudflare.com/workers/quickstart#configure).

1. Set the `NPM_TOKEN` environment variable with the value we provided you with.

   You can use `$Env:NPM_TOKEN="your-npm-token here"` in PowerShell or `export NPM_TOKEN="your-npm-token here"` in Bash.

   > This variable is used within the `.npmrc` file located next to `package.json`
   > So alternatively, simply replace `${NPM_TOKEN}` within `.npmrc` file with the value we provided you with.

   ```bash
   //registry.npmjs.org/:_authToken=npm-token-guid
   ```

## Local development

1. `npm install`
1. `wrangler dev`

## Deployment

1. `wrangler publish`