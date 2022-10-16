import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_rateArgs } from "./args/AggregateTax_rateArgs";
import { AggregateTax_rate } from "../../outputs/AggregateTax_rate";
export declare class AggregateTax_rateResolver {
    aggregateTax_rate(ctx: any, info: GraphQLResolveInfo, args: AggregateTax_rateArgs): Promise<AggregateTax_rate>;
}
