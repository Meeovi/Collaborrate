import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStocksArgs } from "./args/DeleteManyStocksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStocksResolver {
    deleteManyStocks(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStocksArgs): Promise<AffectedRowsOutput>;
}
