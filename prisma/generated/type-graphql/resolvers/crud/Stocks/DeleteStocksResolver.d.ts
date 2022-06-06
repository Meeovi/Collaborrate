import { GraphQLResolveInfo } from "graphql";
import { DeleteStocksArgs } from "./args/DeleteStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class DeleteStocksResolver {
    deleteStocks(ctx: any, info: GraphQLResolveInfo, args: DeleteStocksArgs): Promise<Stocks | null>;
}
