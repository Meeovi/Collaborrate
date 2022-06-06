import { GraphQLResolveInfo } from "graphql";
import { DeleteIntegrationsArgs } from "./args/DeleteIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class DeleteIntegrationsResolver {
    deleteIntegrations(ctx: any, info: GraphQLResolveInfo, args: DeleteIntegrationsArgs): Promise<Integrations | null>;
}
