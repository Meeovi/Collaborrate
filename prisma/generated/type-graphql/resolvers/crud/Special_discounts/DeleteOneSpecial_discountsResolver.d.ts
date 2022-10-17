import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSpecial_discountsArgs } from "./args/DeleteOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class DeleteOneSpecial_discountsResolver {
    deleteOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSpecial_discountsArgs): Promise<Special_discounts | null>;
}
