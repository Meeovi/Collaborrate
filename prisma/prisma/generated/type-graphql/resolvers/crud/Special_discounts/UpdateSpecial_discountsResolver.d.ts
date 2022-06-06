import { GraphQLResolveInfo } from "graphql";
import { UpdateSpecial_discountsArgs } from "./args/UpdateSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class UpdateSpecial_discountsResolver {
    updateSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpdateSpecial_discountsArgs): Promise<Special_discounts | null>;
}
