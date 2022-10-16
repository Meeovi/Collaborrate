import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSpecial_discountsArgs } from "./args/UpsertOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class UpsertOneSpecial_discountsResolver {
    upsertOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSpecial_discountsArgs): Promise<Special_discounts>;
}
