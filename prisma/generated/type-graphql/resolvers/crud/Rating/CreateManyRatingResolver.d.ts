import { GraphQLResolveInfo } from "graphql";
import { CreateManyRatingArgs } from "./args/CreateManyRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRatingResolver {
    createManyRating(ctx: any, info: GraphQLResolveInfo, args: CreateManyRatingArgs): Promise<AffectedRowsOutput>;
}
