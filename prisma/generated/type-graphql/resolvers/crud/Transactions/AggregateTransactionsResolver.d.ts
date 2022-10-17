import { GraphQLResolveInfo } from "graphql";
import { AggregateTransactionsArgs } from "./args/AggregateTransactionsArgs";
import { AggregateTransactions } from "../../outputs/AggregateTransactions";
export declare class AggregateTransactionsResolver {
    aggregateTransactions(ctx: any, info: GraphQLResolveInfo, args: AggregateTransactionsArgs): Promise<AggregateTransactions>;
}
