import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSpecial_discountsArgs } from "./args/FindUniqueSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class FindUniqueSpecial_discountsResolver {
    findUniqueSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSpecial_discountsArgs): Promise<Special_discounts | null>;
}
