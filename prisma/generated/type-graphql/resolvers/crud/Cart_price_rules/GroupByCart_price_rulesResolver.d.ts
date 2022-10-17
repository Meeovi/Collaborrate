import { GraphQLResolveInfo } from "graphql";
import { GroupByCart_price_rulesArgs } from "./args/GroupByCart_price_rulesArgs";
import { Cart_price_rulesGroupBy } from "../../outputs/Cart_price_rulesGroupBy";
export declare class GroupByCart_price_rulesResolver {
    groupByCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: GroupByCart_price_rulesArgs): Promise<Cart_price_rulesGroupBy[]>;
}
