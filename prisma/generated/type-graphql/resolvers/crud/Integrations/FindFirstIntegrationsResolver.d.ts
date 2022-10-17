import { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationsArgs } from "./args/FindFirstIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class FindFirstIntegrationsResolver {
    findFirstIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindFirstIntegrationsArgs): Promise<Integrations | null>;
}
