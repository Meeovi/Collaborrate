import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCart_price_rulesArgs } from "./args/UpdateOneCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class UpdateOneCart_price_rulesResolver {
    updateOneCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
