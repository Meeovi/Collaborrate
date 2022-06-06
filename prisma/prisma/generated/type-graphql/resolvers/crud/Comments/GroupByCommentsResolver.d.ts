import { GraphQLResolveInfo } from "graphql";
import { GroupByCommentsArgs } from "./args/GroupByCommentsArgs";
import { CommentsGroupBy } from "../../outputs/CommentsGroupBy";
export declare class GroupByCommentsResolver {
    groupByComments(ctx: any, info: GraphQLResolveInfo, args: GroupByCommentsArgs): Promise<CommentsGroupBy[]>;
}
