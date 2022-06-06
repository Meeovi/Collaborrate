import { GraphQLResolveInfo } from "graphql";
import { CreateSpecial_discountsArgs } from "./args/CreateSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class CreateSpecial_discountsResolver {
    createSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: CreateSpecial_discountsArgs): Promise<Special_discounts>;
}
