import { GraphQLResolveInfo } from "graphql";
import { GroupByPagesArgs } from "./args/GroupByPagesArgs";
import { PagesGroupBy } from "../../outputs/PagesGroupBy";
export declare class GroupByPagesResolver {
    groupByPages(ctx: any, info: GraphQLResolveInfo, args: GroupByPagesArgs): Promise<PagesGroupBy[]>;
}
