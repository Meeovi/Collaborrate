import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTransactionsArgs } from "./args/DeleteManyTransactionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTransactionsResolver {
    deleteManyTransactions(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTransactionsArgs): Promise<AffectedRowsOutput>;
}
