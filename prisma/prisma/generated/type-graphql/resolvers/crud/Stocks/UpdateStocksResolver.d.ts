import { GraphQLResolveInfo } from "graphql";
import { UpdateStocksArgs } from "./args/UpdateStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class UpdateStocksResolver {
    updateStocks(ctx: any, info: GraphQLResolveInfo, args: UpdateStocksArgs): Promise<Stocks | null>;
}
