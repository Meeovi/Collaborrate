import { GraphQLResolveInfo } from "graphql";
import { UpsertSpecial_discountsArgs } from "./args/UpsertSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class UpsertSpecial_discountsResolver {
    upsertSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpsertSpecial_discountsArgs): Promise<Special_discounts>;
}
