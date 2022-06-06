import { GraphQLResolveInfo } from "graphql";
import { UpsertTax_rateArgs } from "./args/UpsertTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class UpsertTax_rateResolver {
    upsertTax_rate(ctx: any, info: GraphQLResolveInfo, args: UpsertTax_rateArgs): Promise<Tax_rate>;
}
