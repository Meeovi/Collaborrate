import { GraphQLResolveInfo } from "graphql";
import { GroupBySegmentsArgs } from "./args/GroupBySegmentsArgs";
import { SegmentsGroupBy } from "../../outputs/SegmentsGroupBy";
export declare class GroupBySegmentsResolver {
    groupBySegments(ctx: any, info: GraphQLResolveInfo, args: GroupBySegmentsArgs): Promise<SegmentsGroupBy[]>;
}
