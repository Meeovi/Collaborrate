import { GraphQLResolveInfo } from "graphql";
import { UpdateOneIntegrationsArgs } from "./args/UpdateOneIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class UpdateOneIntegrationsResolver {
    updateOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIntegrationsArgs): Promise<Integrations | null>;
}
