import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCollectionsArgs } from "./args/DeleteManyCollectionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCollectionsResolver {
    deleteManyCollections(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCollectionsArgs): Promise<AffectedRowsOutput>;
}
