import { GraphQLResolveInfo } from "graphql";
import { CreateStocksArgs } from "./args/CreateStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class CreateStocksResolver {
    createStocks(ctx: any, info: GraphQLResolveInfo, args: CreateStocksArgs): Promise<Stocks>;
}
