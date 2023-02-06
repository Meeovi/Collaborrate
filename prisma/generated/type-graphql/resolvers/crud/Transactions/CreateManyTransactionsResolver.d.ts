import { GraphQLResolveInfo } from "graphql";
import { CreateManyTransactionsArgs } from "./args/CreateManyTransactionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTransactionsResolver {
    createManyTransactions(ctx: any, info: GraphQLResolveInfo, args: CreateManyTransactionsArgs): Promise<AffectedRowsOutput>;
}
