import { GraphQLResolveInfo } from "graphql";
import { CreateIntegrationsArgs } from "./args/CreateIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class CreateIntegrationsResolver {
    createIntegrations(ctx: any, info: GraphQLResolveInfo, args: CreateIntegrationsArgs): Promise<Integrations>;
}
