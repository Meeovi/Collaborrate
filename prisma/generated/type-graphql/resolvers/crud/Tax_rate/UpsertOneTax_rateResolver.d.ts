import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTax_rateArgs } from "./args/UpsertOneTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class UpsertOneTax_rateResolver {
    upsertOneTax_rate(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTax_rateArgs): Promise<Tax_rate>;
}
