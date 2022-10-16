import { GraphQLResolveInfo } from "graphql";
import { AggregateStocksArgs } from "./args/AggregateStocksArgs";
import { AggregateStocks } from "../../outputs/AggregateStocks";
export declare class AggregateStocksResolver {
    aggregateStocks(ctx: any, info: GraphQLResolveInfo, args: AggregateStocksArgs): Promise<AggregateStocks>;
}
