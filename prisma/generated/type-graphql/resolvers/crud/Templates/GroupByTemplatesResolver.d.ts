import type { GraphQLResolveInfo } from "graphql";
import { GroupByTemplatesArgs } from "./args/GroupByTemplatesArgs";
import { TemplatesGroupBy } from "../../outputs/TemplatesGroupBy";
export declare class GroupByTemplatesResolver {
    groupByTemplates(ctx: any, info: GraphQLResolveInfo, args: GroupByTemplatesArgs): Promise<TemplatesGroupBy[]>;
}
