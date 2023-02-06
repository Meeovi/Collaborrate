import { GraphQLResolveInfo } from "graphql";
import { GroupByReturnsArgs } from "./args/GroupByReturnsArgs";
import { ReturnsGroupBy } from "../../outputs/ReturnsGroupBy";
export declare class GroupByReturnsResolver {
    groupByReturns(ctx: any, info: GraphQLResolveInfo, args: GroupByReturnsArgs): Promise<ReturnsGroupBy[]>;
}
