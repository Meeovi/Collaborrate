import { GraphQLResolveInfo } from "graphql";
import { CreateOneIntegrationsArgs } from "./args/CreateOneIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class CreateOneIntegrationsResolver {
    createOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: CreateOneIntegrationsArgs): Promise<Integrations>;
}
