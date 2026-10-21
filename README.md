# @serpdata.dev/n8n-nodes-serpdata

An [n8n](https://n8n.io) community node for the [SerpData API](https://serpdata.dev). It gets Google results in a workflow, or as a tool for an n8n AI Agent:

- Google search: web, images, videos, news, shopping and patents
- Google autocomplete and Google Trends
- Google Maps: search places, places in an area, one place, its reviews and its photos

## Installation

In n8n, open **Settings → Community Nodes**, choose **Install**, and enter `@serpdata.dev/n8n-nodes-serpdata`. See the [n8n community nodes guide](https://docs.n8n.io/integrations/community-nodes/installation/) for self-hosted setups.

## Credentials

Create an API key on the [serpdata.dev dashboard](https://serpdata.dev), then add a **SerpData API** credential in n8n and paste the key. Testing the credential looks up a place that does not exist, so it uses no credits.

## Usage

Add the **SerpData** node and pick an operation. Required fields show on the node. Optional ones are under **Add Option**. Each operation returns the API's JSON response as one item. Each successful call uses one credit unless the account is unlimited.

For paging, pass a response's `nextPageToken` into the next call's **Page Token** option (reviews), or raise **Offset** by 10 (web search).

The fields and their help text come from the API contract. See the [API docs](https://serpdata.dev/docs) for every parameter and response field.

## License

MIT
