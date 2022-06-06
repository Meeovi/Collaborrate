import { GraphQLResolveInfo } from "graphql";
import { FindFirstCart_price_rulesArgs } from "./args/FindFirstCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class FindFirstCart_price_rulesResolver {
    findFirstCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindFirstCart_price_rulesArgs): Promise<Cart_price_rules | null>;
}
