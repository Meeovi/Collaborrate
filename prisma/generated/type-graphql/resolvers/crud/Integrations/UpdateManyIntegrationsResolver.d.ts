import { GraphQLResolveInfo } from "graphql";
import { UpdateManyIntegrationsArgs } from "./args/UpdateManyIntegrationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIntegrationsResolver {
    updateManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIntegrationsArgs): Promise<AffectedRowsOutput>;
}
