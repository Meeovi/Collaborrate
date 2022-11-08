import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrenciesArgs } from "./args/GroupByCurrenciesArgs";
import { CurrenciesGroupBy } from "../../outputs/CurrenciesGroupBy";
export declare class GroupByCurrenciesResolver {
    groupByCurrencies(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrenciesArgs): Promise<CurrenciesGroupBy[]>;
}
