import { GraphQLResolveInfo } from "graphql";
import { GroupByOotoArgs } from "./args/GroupByOotoArgs";
import { OotoGroupBy } from "../../outputs/OotoGroupBy";
export declare class GroupByOotoResolver {
    groupByOoto(ctx: any, info: GraphQLResolveInfo, args: GroupByOotoArgs): Promise<OotoGroupBy[]>;
}
