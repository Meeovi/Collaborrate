import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_ruleArgs } from "./args/GroupByTax_ruleArgs";
import { Tax_ruleGroupBy } from "../../outputs/Tax_ruleGroupBy";
export declare class GroupByTax_ruleResolver {
    groupByTax_rule(ctx: any, info: GraphQLResolveInfo, args: GroupByTax_ruleArgs): Promise<Tax_ruleGroupBy[]>;
}
