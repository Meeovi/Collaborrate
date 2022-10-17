import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCommentsArgs } from "./args/DeleteManyCommentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCommentsResolver {
    deleteManyComments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCommentsArgs): Promise<AffectedRowsOutput>;
}
