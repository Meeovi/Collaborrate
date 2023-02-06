import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTransactionsOrThrowArgs } from "./args/FindUniqueTransactionsOrThrowArgs";
import { Transactions } from "../../../models/Transactions";
export declare class FindUniqueTransactionsOrThrowResolver {
    findUniqueTransactionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTransactionsOrThrowArgs): Promise<Transactions | null>;
}
