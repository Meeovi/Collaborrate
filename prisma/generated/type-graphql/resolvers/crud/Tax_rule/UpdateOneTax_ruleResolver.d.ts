import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTax_ruleArgs } from "./args/UpdateOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class UpdateOneTax_ruleResolver {
    updateOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTax_ruleArgs): Promise<Tax_rule | null>;
}
