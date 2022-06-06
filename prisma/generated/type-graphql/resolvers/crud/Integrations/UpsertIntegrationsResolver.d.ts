import { GraphQLResolveInfo } from "graphql";
import { UpsertIntegrationsArgs } from "./args/UpsertIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class UpsertIntegrationsResolver {
    upsertIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpsertIntegrationsArgs): Promise<Integrations>;
}
