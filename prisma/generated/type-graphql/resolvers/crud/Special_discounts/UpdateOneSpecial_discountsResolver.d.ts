import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSpecial_discountsArgs } from "./args/UpdateOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class UpdateOneSpecial_discountsResolver {
    updateOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSpecial_discountsArgs): Promise<Special_discounts | null>;
}
