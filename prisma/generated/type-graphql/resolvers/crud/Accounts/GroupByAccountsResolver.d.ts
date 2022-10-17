import { GraphQLResolveInfo } from "graphql";
import { GroupByAccountsArgs } from "./args/GroupByAccountsArgs";
import { AccountsGroupBy } from "../../outputs/AccountsGroupBy";
export declare class GroupByAccountsResolver {
    groupByAccounts(ctx: any, info: GraphQLResolveInfo, args: GroupByAccountsArgs): Promise<AccountsGroupBy[]>;
}
