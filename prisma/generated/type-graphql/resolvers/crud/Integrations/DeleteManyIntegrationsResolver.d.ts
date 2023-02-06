import { GraphQLResolveInfo } from "graphql";
import { DeleteManyIntegrationsArgs } from "./args/DeleteManyIntegrationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIntegrationsResolver {
    deleteManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIntegrationsArgs): Promise<AffectedRowsOutput>;
}
