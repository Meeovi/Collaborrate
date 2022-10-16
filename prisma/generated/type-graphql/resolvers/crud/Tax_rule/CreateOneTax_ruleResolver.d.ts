import { GraphQLResolveInfo } from "graphql";
import { CreateOneTax_ruleArgs } from "./args/CreateOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class CreateOneTax_ruleResolver {
    createOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: CreateOneTax_ruleArgs): Promise<Tax_rule>;
}
