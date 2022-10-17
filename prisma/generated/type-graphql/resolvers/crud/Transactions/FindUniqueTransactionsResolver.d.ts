import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTransactionsArgs } from "./args/FindUniqueTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class FindUniqueTransactionsResolver {
    findUniqueTransactions(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTransactionsArgs): Promise<Transactions | null>;
}
