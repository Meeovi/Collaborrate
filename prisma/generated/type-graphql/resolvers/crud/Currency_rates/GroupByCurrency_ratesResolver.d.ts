import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrency_ratesArgs } from "./args/GroupByCurrency_ratesArgs";
import { Currency_ratesGroupBy } from "../../outputs/Currency_ratesGroupBy";
export declare class GroupByCurrency_ratesResolver {
    groupByCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrency_ratesArgs): Promise<Currency_ratesGroupBy[]>;
}
