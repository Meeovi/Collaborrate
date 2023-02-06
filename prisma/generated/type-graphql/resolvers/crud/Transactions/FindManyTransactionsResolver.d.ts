import { GraphQLResolveInfo } from "graphql";
import { FindManyTransactionsArgs } from "./args/FindManyTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class FindManyTransactionsResolver {
    findManyTransactions(ctx: any, info: GraphQLResolveInfo, args: FindManyTransactionsArgs): Promise<Transactions[]>;
}
