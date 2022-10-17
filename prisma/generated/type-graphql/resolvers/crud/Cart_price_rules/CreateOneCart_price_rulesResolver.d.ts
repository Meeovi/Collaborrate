import { GraphQLResolveInfo } from "graphql";
import { CreateOneCart_price_rulesArgs } from "./args/CreateOneCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class CreateOneCart_price_rulesResolver {
    createOneCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: CreateOneCart_price_rulesArgs): Promise<Cart_price_rules>;
}
