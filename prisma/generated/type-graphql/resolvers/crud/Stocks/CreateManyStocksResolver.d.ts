import { GraphQLResolveInfo } from "graphql";
import { CreateManyStocksArgs } from "./args/CreateManyStocksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStocksResolver {
    createManyStocks(ctx: any, info: GraphQLResolveInfo, args: CreateManyStocksArgs): Promise<AffectedRowsOutput>;
}
