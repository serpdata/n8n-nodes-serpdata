import type {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from "n8n-workflow"

export class SerpDataApi implements ICredentialType {
  name = "serpDataApi"

  displayName = "SerpData API"

  icon = { light: "file:serpdata.svg", dark: "file:serpdata.dark.svg" } as const

  documentationUrl = "https://serpdata.dev/docs"

  properties = [
    {
      displayName: "API Key",
      name: "apiKey",
      type: "string",
      typeOptions: { password: true },
      required: true,
      default: "",
      description: "Create a key on the serpdata.dev dashboard",
    },
  ] satisfies INodeProperties[]

  authenticate = {
    type: "generic",
    properties: {
      headers: {
        "x-api-key": "={{$credentials.apiKey}}",
      },
    },
  } satisfies IAuthenticateGeneric

  test = {
    request: {
      baseURL: "https://api.serpdata.dev",
      url: "/google/maps/place",
      method: "POST",
      body: { cid: "1" },
      ignoreHttpStatusErrors: true,
    },
    rules: [
      {
        type: "responseSuccessBody",
        properties: {
          key: "code",
          value: "UNAUTHORIZED",
          message: "The API key is missing, unknown, or revoked",
        },
      },
    ],
  } satisfies ICredentialTestRequest
}
