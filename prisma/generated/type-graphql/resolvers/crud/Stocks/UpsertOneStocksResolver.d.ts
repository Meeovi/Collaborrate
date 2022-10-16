import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStocksArgs } from "./args/UpsertOneStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class UpsertOneStocksResolver {
    upsertOneStocks(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStocksArgs): Promise<Stocks>;
}
