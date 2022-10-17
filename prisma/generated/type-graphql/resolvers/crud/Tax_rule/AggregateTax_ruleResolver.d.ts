import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_ruleArgs } from "./args/AggregateTax_ruleArgs";
import { AggregateTax_rule } from "../../outputs/AggregateTax_rule";
export declare class AggregateTax_ruleResolver {
    aggregateTax_rule(ctx: any, info: GraphQLResolveInfo, args: AggregateTax_ruleArgs): Promise<AggregateTax_rule>;
}
