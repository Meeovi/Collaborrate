import { GraphQLResolveInfo } from "graphql";
import { FindManyStocksArgs } from "./args/FindManyStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class FindManyStocksResolver {
    findManyStocks(ctx: any, info: GraphQLResolveInfo, args: FindManyStocksArgs): Promise<Stocks[]>;
}
