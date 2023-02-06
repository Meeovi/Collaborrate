import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTagsArgs } from "./args/DeleteManyTagsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTagsResolver {
    deleteManyTags(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsArgs): Promise<AffectedRowsOutput>;
}
