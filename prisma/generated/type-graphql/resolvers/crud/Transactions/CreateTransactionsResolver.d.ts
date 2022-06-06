import { GraphQLResolveInfo } from "graphql";
import { CreateTransactionsArgs } from "./args/CreateTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class CreateTransactionsResolver {
    createTransactions(ctx: any, info: GraphQLResolveInfo, args: CreateTransactionsArgs): Promise<Transactions>;
}
