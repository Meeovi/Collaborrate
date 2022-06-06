import { GraphQLResolveInfo } from "graphql";
import { FindManyCart_price_rulesArgs } from "./args/FindManyCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
export declare class FindManyCart_price_rulesResolver {
    findManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindManyCart_price_rulesArgs): Promise<Cart_price_rules[]>;
}
