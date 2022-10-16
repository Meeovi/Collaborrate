import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTransactionsArgs } from "./args/UpsertOneTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class UpsertOneTransactionsResolver {
    upsertOneTransactions(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTransactionsArgs): Promise<Transactions>;
}
