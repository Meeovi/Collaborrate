import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDiscountsOrThrowArgs } from "./args/FindUniqueDiscountsOrThrowArgs";
import { Discounts } from "../../../models/Discounts";
export declare class FindUniqueDiscountsOrThrowResolver {
    findUniqueDiscountsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDiscountsOrThrowArgs): Promise<Discounts | null>;
}
