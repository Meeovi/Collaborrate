import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStocksArgs } from "./args/UpdateManyStocksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStocksResolver {
    updateManyStocks(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStocksArgs): Promise<AffectedRowsOutput>;
}
