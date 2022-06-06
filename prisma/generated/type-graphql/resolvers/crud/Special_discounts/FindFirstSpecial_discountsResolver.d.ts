import { GraphQLResolveInfo } from "graphql";
import { FindFirstSpecial_discountsArgs } from "./args/FindFirstSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class FindFirstSpecial_discountsResolver {
    findFirstSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindFirstSpecial_discountsArgs): Promise<Special_discounts | null>;
}
