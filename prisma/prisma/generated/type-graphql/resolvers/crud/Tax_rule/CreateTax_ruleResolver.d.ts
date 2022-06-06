import { GraphQLResolveInfo } from "graphql";
import { CreateTax_ruleArgs } from "./args/CreateTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class CreateTax_ruleResolver {
    createTax_rule(ctx: any, info: GraphQLResolveInfo, args: CreateTax_ruleArgs): Promise<Tax_rule>;
}
