import { GraphQLResolveInfo } from "graphql";
import { GroupByRatingArgs } from "./args/GroupByRatingArgs";
import { RatingGroupBy } from "../../outputs/RatingGroupBy";
export declare class GroupByRatingResolver {
    groupByRating(ctx: any, info: GraphQLResolveInfo, args: GroupByRatingArgs): Promise<RatingGroupBy[]>;
}
