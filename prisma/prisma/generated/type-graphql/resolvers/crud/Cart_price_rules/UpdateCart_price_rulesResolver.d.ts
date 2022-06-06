import { GraphQLResolveInfo } from "graphql";
import { UpdateCart_price_rulesArgs } from "./args/UpdateCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class UpdateCart_price_rulesResolver {
    updateCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpdateCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
