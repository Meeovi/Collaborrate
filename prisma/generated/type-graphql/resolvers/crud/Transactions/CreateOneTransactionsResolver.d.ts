import { GraphQLResolveInfo } from "graphql";
import { CreateOneTransactionsArgs } from "./args/CreateOneTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class CreateOneTransactionsResolver {
    createOneTransactions(ctx: any, info: GraphQLResolveInfo, args: CreateOneTransactionsArgs): Promise<Transactions>;
}
