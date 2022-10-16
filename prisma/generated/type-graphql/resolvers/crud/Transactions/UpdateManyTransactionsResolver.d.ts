import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTransactionsArgs } from "./args/UpdateManyTransactionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTransactionsResolver {
    updateManyTransactions(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTransactionsArgs): Promise<AffectedRowsOutput>;
}
