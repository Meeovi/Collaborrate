import { GraphQLResolveInfo } from "graphql";
import { CreateOneStocksArgs } from "./args/CreateOneStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class CreateOneStocksResolver {
    createOneStocks(ctx: any, info: GraphQLResolveInfo, args: CreateOneStocksArgs): Promise<Stocks>;
}
