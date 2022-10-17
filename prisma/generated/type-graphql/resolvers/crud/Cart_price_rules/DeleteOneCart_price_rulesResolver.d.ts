import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCart_price_rulesArgs } from "./args/DeleteOneCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class DeleteOneCart_price_rulesResolver {
    deleteOneCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
