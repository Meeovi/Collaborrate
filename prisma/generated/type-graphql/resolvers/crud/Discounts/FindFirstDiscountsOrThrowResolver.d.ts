import { GraphQLResolveInfo } from "graphql";
import { FindFirstDiscountsOrThrowArgs } from "./args/FindFirstDiscountsOrThrowArgs";
import { Discounts } from "../../../models/Discounts";
export declare class FindFirstDiscountsOrThrowResolver {
    findFirstDiscountsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDiscountsOrThrowArgs): Promise<Discounts | null>;
}
