import { GraphQLResolveInfo } from "graphql";
import { DeleteCart_price_rulesArgs } from "./args/DeleteCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class DeleteCart_price_rulesResolver {
    deleteCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: DeleteCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
