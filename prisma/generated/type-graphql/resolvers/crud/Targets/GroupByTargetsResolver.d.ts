import { GraphQLResolveInfo } from "graphql";
import { GroupByTargetsArgs } from "./args/GroupByTargetsArgs";
import { TargetsGroupBy } from "../../outputs/TargetsGroupBy";
export declare class GroupByTargetsResolver {
    groupByTargets(ctx: any, info: GraphQLResolveInfo, args: GroupByTargetsArgs): Promise<TargetsGroupBy[]>;
}
