import { GraphQLResolveInfo } from "graphql";
import { UpsertTransactionsArgs } from "./args/UpsertTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class UpsertTransactionsResolver {
    upsertTransactions(ctx: any, info: GraphQLResolveInfo, args: UpsertTransactionsArgs): Promise<Transactions>;
}
