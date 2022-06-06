import { GraphQLResolveInfo } from "graphql";
import { UpsertCart_price_rulesArgs } from "./args/UpsertCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class UpsertCart_price_rulesResolver {
    upsertCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpsertCart_price_rulesArgs): Promise<Cart_price_rules>;
}
