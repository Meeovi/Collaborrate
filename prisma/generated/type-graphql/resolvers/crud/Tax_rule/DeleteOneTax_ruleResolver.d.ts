import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTax_ruleArgs } from "./args/DeleteOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class DeleteOneTax_ruleResolver {
    deleteOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTax_ruleArgs): Promise<Tax_rule | null>;
}
