import { GraphQLResolveInfo } from "graphql";
import { DeleteSpecial_discountsArgs } from "./args/DeleteSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class DeleteSpecial_discountsResolver {
    deleteSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: DeleteSpecial_discountsArgs): Promise<Special_discounts | null>;
}
