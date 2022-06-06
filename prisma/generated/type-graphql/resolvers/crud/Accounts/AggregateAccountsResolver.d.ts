import { GraphQLResolveInfo } from "graphql";
import { AggregateAccountsArgs } from "./args/AggregateAccountsArgs";
import { AggregateAccounts } from "../../outputs/AggregateAccounts";
export declare class AggregateAccountsResolver {
    aggregateAccounts(ctx: any, info: GraphQLResolveInfo, args: AggregateAccountsArgs): Promise<AggregateAccounts>;
}
