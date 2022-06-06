import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_ratesArgs } from "./args/AggregateCurrency_ratesArgs";
import { AggregateCurrency_rates } from "../../outputs/AggregateCurrency_rates";
export declare class AggregateCurrency_ratesResolver {
    aggregateCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrency_ratesArgs): Promise<AggregateCurrency_rates>;
}
