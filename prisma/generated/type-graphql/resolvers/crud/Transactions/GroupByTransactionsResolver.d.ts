import { GraphQLResolveInfo } from "graphql";
import { GroupByTransactionsArgs } from "./args/GroupByTransactionsArgs";
import { TransactionsGroupBy } from "../../outputs/TransactionsGroupBy";
export declare class GroupByTransactionsResolver {
    groupByTransactions(ctx: any, info: GraphQLResolveInfo, args: GroupByTransactionsArgs): Promise<TransactionsGroupBy[]>;
}
