import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_symbolsArgs } from "./args/AggregateCurrency_symbolsArgs";
import { AggregateCurrency_symbols } from "../../outputs/AggregateCurrency_symbols";
export declare class AggregateCurrency_symbolsResolver {
    aggregateCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrency_symbolsArgs): Promise<AggregateCurrency_symbols>;
}
