import { GraphQLResolveInfo } from "graphql";
import { UpsertOneIntegrationsArgs } from "./args/UpsertOneIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class UpsertOneIntegrationsResolver {
    upsertOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIntegrationsArgs): Promise<Integrations>;
}
