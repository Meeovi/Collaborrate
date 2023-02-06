import { GraphQLResolveInfo } from "graphql";
import { FindFirstTransactionsArgs } from "./args/FindFirstTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class FindFirstTransactionsResolver {
    findFirstTransactions(ctx: any, info: GraphQLResolveInfo, args: FindFirstTransactionsArgs): Promise<Transactions | null>;
}
