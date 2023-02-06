import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDiscountsArgs } from "./args/UpdateOneDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class UpdateOneDiscountsResolver {
    updateOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDiscountsArgs): Promise<Discounts | null>;
}
