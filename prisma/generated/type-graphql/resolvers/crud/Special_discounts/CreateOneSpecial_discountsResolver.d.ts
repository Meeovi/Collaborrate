import { GraphQLResolveInfo } from "graphql";
import { CreateOneSpecial_discountsArgs } from "./args/CreateOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class CreateOneSpecial_discountsResolver {
    createOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: CreateOneSpecial_discountsArgs): Promise<Special_discounts>;
}
