import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from "n8n-workflow"
import { properties } from "./properties"

export class SerpData implements INodeType {
  description: INodeTypeDescription = {
    displayName: "SerpData",
    name: "serpData",
    icon: { light: "file:serpdata.svg", dark: "file:serpdata.dark.svg" },
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"]}}',
    description: "Get Google search, Maps and Trends results from the SerpData API",
    defaults: { name: "SerpData" },
    usableAsTool: true,
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    credentials: [{ name: "serpDataApi", required: true }],
    requestDefaults: {
      baseURL: "https://api.serpdata.dev",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
    },
    properties,
  }
}
