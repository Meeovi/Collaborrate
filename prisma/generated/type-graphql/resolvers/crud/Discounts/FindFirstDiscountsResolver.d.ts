import { GraphQLResolveInfo } from "graphql";
import { FindFirstDiscountsArgs } from "./args/FindFirstDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class FindFirstDiscountsResolver {
    findFirstDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindFirstDiscountsArgs): Promise<Discounts | null>;
}
