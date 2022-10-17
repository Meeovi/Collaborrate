import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStocksArgs } from "./args/UpdateOneStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class UpdateOneStocksResolver {
    updateOneStocks(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStocksArgs): Promise<Stocks | null>;
}
