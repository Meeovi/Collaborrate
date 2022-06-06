import { GraphQLResolveInfo } from "graphql";
import { CreateCart_price_rulesArgs } from "./args/CreateCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class CreateCart_price_rulesResolver {
    createCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: CreateCart_price_rulesArgs): Promise<Cart_price_rules>;
}
