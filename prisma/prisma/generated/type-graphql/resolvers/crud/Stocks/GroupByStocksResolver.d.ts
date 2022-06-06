import { GraphQLResolveInfo } from "graphql";
import { GroupByStocksArgs } from "./args/GroupByStocksArgs";
import { StocksGroupBy } from "../../outputs/StocksGroupBy";
export declare class GroupByStocksResolver {
    groupByStocks(ctx: any, info: GraphQLResolveInfo, args: GroupByStocksArgs): Promise<StocksGroupBy[]>;
}
