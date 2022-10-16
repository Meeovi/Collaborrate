import { GraphQLResolveInfo } from "graphql";
import { FindFirstTax_ruleArgs } from "./args/FindFirstTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class FindFirstTax_ruleResolver {
    findFirstTax_rule(ctx: any, info: GraphQLResolveInfo, args: FindFirstTax_ruleArgs): Promise<Tax_rule | null>;
}
