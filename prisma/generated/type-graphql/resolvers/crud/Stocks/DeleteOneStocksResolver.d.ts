import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStocksArgs } from "./args/DeleteOneStocksArgs";
import { Stocks } from "../../../models/Stocks";
export declare class DeleteOneStocksResolver {
    deleteOneStocks(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStocksArgs): Promise<Stocks | null>;
}
