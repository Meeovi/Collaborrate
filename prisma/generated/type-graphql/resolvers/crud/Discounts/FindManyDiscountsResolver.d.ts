import { GraphQLResolveInfo } from "graphql";
import { FindManyDiscountsArgs } from "./args/FindManyDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class FindManyDiscountsResolver {
    findManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindManyDiscountsArgs): Promise<Discounts[]>;
}
