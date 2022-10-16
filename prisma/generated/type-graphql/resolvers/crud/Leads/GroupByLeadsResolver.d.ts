import { GraphQLResolveInfo } from "graphql";
import { GroupByLeadsArgs } from "./args/GroupByLeadsArgs";
import { LeadsGroupBy } from "../../outputs/LeadsGroupBy";
export declare class GroupByLeadsResolver {
    groupByLeads(ctx: any, info: GraphQLResolveInfo, args: GroupByLeadsArgs): Promise<LeadsGroupBy[]>;
}
