import { GraphQLResolveInfo } from "graphql";
import { DeleteTransactionsArgs } from "./args/DeleteTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class DeleteTransactionsResolver {
    deleteTransactions(ctx: any, info: GraphQLResolveInfo, args: DeleteTransactionsArgs): Promise<Transactions | null>;
}
