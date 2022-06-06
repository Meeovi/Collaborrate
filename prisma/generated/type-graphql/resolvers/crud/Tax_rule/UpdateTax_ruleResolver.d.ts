import { GraphQLResolveInfo } from "graphql";
import { UpdateTax_ruleArgs } from "./args/UpdateTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class UpdateTax_ruleResolver {
    updateTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateTax_ruleArgs): Promise<Tax_rule | null>;
}
