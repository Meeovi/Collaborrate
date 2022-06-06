import { GraphQLResolveInfo } from "graphql";
import { UpsertTax_ruleArgs } from "./args/UpsertTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class UpsertTax_ruleResolver {
    upsertTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpsertTax_ruleArgs): Promise<Tax_rule>;
}
