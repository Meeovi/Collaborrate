import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_categoryArgs } from "./args/GroupByTax_categoryArgs";
import { Tax_categoryGroupBy } from "../../outputs/Tax_categoryGroupBy";
export declare class GroupByTax_categoryResolver {
    groupByTax_category(ctx: any, info: GraphQLResolveInfo, args: GroupByTax_categoryArgs): Promise<Tax_categoryGroupBy[]>;
}
