import { GraphQLResolveInfo } from "graphql";
import { DeleteTax_ruleArgs } from "./args/DeleteTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class DeleteTax_ruleResolver {
    deleteTax_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteTax_ruleArgs): Promise<Tax_rule | null>;
}
