import { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationsArgs } from "./args/FindUniqueIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class FindUniqueIntegrationsResolver {
    findUniqueIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIntegrationsArgs): Promise<Integrations | null>;
}
