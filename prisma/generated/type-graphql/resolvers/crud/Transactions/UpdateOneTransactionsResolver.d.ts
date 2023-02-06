import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTransactionsArgs } from "./args/UpdateOneTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
export declare class UpdateOneTransactionsResolver {
    updateOneTransactions(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTransactionsArgs): Promise<Transactions | null>;
}
