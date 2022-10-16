import { GraphQLResolveInfo } from "graphql";
import { GroupByFullfillmentsArgs } from "./args/GroupByFullfillmentsArgs";
import { FullfillmentsGroupBy } from "../../outputs/FullfillmentsGroupBy";
export declare class GroupByFullfillmentsResolver {
    groupByFullfillments(ctx: any, info: GraphQLResolveInfo, args: GroupByFullfillmentsArgs): Promise<FullfillmentsGroupBy[]>;
}
