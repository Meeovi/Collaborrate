import { GraphQLResolveInfo } from "graphql";
import { FindManyTax_ruleArgs } from "./args/FindManyTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class FindManyTax_ruleResolver {
    tax_rules(ctx: any, info: GraphQLResolveInfo, args: FindManyTax_ruleArgs): Promise<Tax_rule[]>;
}
