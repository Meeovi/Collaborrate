import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDiscountsArgs } from "./args/FindUniqueDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class FindUniqueDiscountsResolver {
    findUniqueDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDiscountsArgs): Promise<Discounts | null>;
}
