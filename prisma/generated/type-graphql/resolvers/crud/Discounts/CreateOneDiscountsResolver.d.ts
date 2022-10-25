import { GraphQLResolveInfo } from "graphql";
import { CreateOneDiscountsArgs } from "./args/CreateOneDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
export declare class CreateOneDiscountsResolver {
    createOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: CreateOneDiscountsArgs): Promise<Discounts>;
}
