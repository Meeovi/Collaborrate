import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTax_ruleArgs } from "./args/UpsertOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class UpsertOneTax_ruleResolver {
    upsertOneTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTax_ruleArgs): Promise<Tax_rule>;
}
