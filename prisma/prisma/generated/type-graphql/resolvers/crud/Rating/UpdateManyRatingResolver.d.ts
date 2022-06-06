import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRatingArgs } from "./args/UpdateManyRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRatingResolver {
    updateManyRating(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRatingArgs): Promise<AffectedRowsOutput>;
}
