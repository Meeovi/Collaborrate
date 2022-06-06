import { GraphQLResolveInfo } from "graphql";
import { UpsertStocksArgs } from "./args/UpsertStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class UpsertStocksResolver {
    upsertStocks(ctx: any, info: GraphQLResolveInfo, args: UpsertStocksArgs): Promise<Stocks>;
}
