import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTax_ruleArgs } from "./args/FindUniqueTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class FindUniqueTax_ruleResolver {
    tax_rule(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTax_ruleArgs): Promise<Tax_rule | null>;
}
