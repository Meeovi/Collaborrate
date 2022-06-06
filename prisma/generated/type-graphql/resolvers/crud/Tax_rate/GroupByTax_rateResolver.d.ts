import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_rateArgs } from "./args/GroupByTax_rateArgs";
import { Tax_rateGroupBy } from "../../outputs/Tax_rateGroupBy";
export declare class GroupByTax_rateResolver {
    groupByTax_rate(ctx: any, info: GraphQLResolveInfo, args: GroupByTax_rateArgs): Promise<Tax_rateGroupBy[]>;
}
