import { GraphQLResolveInfo } from "graphql";
import { UpdateIntegrationsArgs } from "./args/UpdateIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class UpdateIntegrationsResolver {
    updateIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpdateIntegrationsArgs): Promise<Integrations | null>;
}
