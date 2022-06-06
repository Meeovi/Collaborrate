import { GraphQLResolveInfo } from "graphql";
import { FindFirstStocksArgs } from "./args/FindFirstStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class FindFirstStocksResolver {
    findFirstStocks(ctx: any, info: GraphQLResolveInfo, args: FindFirstStocksArgs): Promise<Stocks | null>;
}
