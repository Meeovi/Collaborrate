import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDiscountsArgs } from "./args/UpsertOneDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class UpsertOneDiscountsResolver {
    upsertOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDiscountsArgs): Promise<Discounts>;
}
