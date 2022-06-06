import { GraphQLResolveInfo } from "graphql";
import { FindManySpecial_discountsArgs } from "./args/FindManySpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
export declare class FindManySpecial_discountsResolver {
    findManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindManySpecial_discountsArgs): Promise<Special_discounts[]>;
}
