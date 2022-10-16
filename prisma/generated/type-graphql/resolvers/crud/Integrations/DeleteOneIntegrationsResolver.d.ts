import { GraphQLResolveInfo } from "graphql";
import { DeleteOneIntegrationsArgs } from "./args/DeleteOneIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class DeleteOneIntegrationsResolver {
    deleteOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIntegrationsArgs): Promise<Integrations | null>;
}
