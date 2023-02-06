import { GraphQLResolveInfo } from "graphql";
import { DeleteOneDiscountsArgs } from "./args/DeleteOneDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class DeleteOneDiscountsResolver {
    deleteOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDiscountsArgs): Promise<Discounts | null>;
}
