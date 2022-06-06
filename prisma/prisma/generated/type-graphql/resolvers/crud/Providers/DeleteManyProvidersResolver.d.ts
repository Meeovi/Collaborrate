import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProvidersArgs } from "./args/DeleteManyProvidersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProvidersResolver {
    deleteManyProviders(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProvidersArgs): Promise<AffectedRowsOutput>;
}
