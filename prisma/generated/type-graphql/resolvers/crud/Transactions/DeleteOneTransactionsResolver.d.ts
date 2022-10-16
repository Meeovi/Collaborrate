import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTransactionsArgs } from "./args/DeleteOneTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class DeleteOneTransactionsResolver {
    deleteOneTransactions(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTransactionsArgs): Promise<Transactions | null>;
}
