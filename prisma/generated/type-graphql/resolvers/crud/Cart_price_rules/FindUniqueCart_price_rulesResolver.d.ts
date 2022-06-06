import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCart_price_rulesArgs } from "./args/FindUniqueCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class FindUniqueCart_price_rulesResolver {
    findUniqueCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
