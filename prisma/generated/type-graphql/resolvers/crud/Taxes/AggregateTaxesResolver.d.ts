import { GraphQLResolveInfo } from "graphql";
import { AggregateTaxesArgs } from "./args/AggregateTaxesArgs";
import { AggregateTaxes } from "../../outputs/AggregateTaxes";
export declare class AggregateTaxesResolver {
    aggregateTaxes(ctx: any, info: GraphQLResolveInfo, args: AggregateTaxesArgs): Promise<AggregateTaxes>;
}
