import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStocksArgs } from "./args/FindUniqueStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class FindUniqueStocksResolver {
    findUniqueStocks(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStocksArgs): Promise<Stocks | null>;
}
