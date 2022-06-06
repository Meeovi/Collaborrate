import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrency_symbolsArgs } from "./args/GroupByCurrency_symbolsArgs";
import { Currency_symbolsGroupBy } from "../../outputs/Currency_symbolsGroupBy";
export declare class GroupByCurrency_symbolsResolver {
    groupByCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrency_symbolsArgs): Promise<Currency_symbolsGroupBy[]>;
}
