import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCollectionsArgs } from "./args/UpdateManyCollectionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCollectionsResolver {
    updateManyCollections(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCollectionsArgs): Promise<AffectedRowsOutput>;
}
