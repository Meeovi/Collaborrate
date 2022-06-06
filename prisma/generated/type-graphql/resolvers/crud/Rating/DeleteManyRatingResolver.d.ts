import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRatingArgs } from "./args/DeleteManyRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRatingResolver {
    deleteManyRating(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRatingArgs): Promise<AffectedRowsOutput>;
}
