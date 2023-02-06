import { GraphQLResolveInfo } from "graphql";
import { CreateManyIntegrationsArgs } from "./args/CreateManyIntegrationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIntegrationsResolver {
    createManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: CreateManyIntegrationsArgs): Promise<AffectedRowsOutput>;
}
