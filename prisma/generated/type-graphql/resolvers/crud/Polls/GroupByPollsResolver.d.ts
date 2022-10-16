import { GraphQLResolveInfo } from "graphql";
import { GroupByPollsArgs } from "./args/GroupByPollsArgs";
import { PollsGroupBy } from "../../outputs/PollsGroupBy";
export declare class GroupByPollsResolver {
    groupByPolls(ctx: any, info: GraphQLResolveInfo, args: GroupByPollsArgs): Promise<PollsGroupBy[]>;
}
