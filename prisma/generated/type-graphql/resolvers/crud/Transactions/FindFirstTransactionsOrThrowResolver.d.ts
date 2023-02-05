import { GraphQLResolveInfo } from "graphql";
import { FindFirstTransactionsOrThrowArgs } from "./args/FindFirstTransactionsOrThrowArgs";
import { Transactions } from "../../../models/Transactions";
export declare class FindFirstTransactionsOrThrowResolver {
    findFirstTransactionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTransactionsOrThrowArgs): Promise<Transactions | null>;
}
