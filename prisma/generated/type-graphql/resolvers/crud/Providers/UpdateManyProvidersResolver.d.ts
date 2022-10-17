import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProvidersArgs } from "./args/UpdateManyProvidersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProvidersResolver {
    updateManyProviders(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProvidersArgs): Promise<AffectedRowsOutput>;
}
