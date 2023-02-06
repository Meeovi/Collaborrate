import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrenciesArgs } from "./args/AggregateCurrenciesArgs";
import { AggregateCurrencies } from "../../outputs/AggregateCurrencies";
export declare class AggregateCurrenciesResolver {
    aggregateCurrencies(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrenciesArgs): Promise<AggregateCurrencies>;
}
