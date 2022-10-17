import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCart_price_rulesArgs } from "./args/UpsertOneCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class UpsertOneCart_price_rulesResolver {
    upsertOneCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCart_price_rulesArgs): Promise<Cart_price_rules>;
}
