import { GraphQLResolveInfo } from "graphql";
import { UpdateTransactionsArgs } from "./args/UpdateTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class UpdateTransactionsResolver {
    updateTransactions(ctx: any, info: GraphQLResolveInfo, args: UpdateTransactionsArgs): Promise<Transactions | null>;
}
