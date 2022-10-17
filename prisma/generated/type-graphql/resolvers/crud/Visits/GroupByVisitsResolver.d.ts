import { GraphQLResolveInfo } from "graphql";
import { GroupByVisitsArgs } from "./args/GroupByVisitsArgs";
import { VisitsGroupBy } from "../../outputs/VisitsGroupBy";
export declare class GroupByVisitsResolver {
    groupByVisits(ctx: any, info: GraphQLResolveInfo, args: GroupByVisitsArgs): Promise<VisitsGroupBy[]>;
}
