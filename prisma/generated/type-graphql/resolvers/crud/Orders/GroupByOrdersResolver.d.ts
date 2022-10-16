import { GraphQLResolveInfo } from "graphql";
import { GroupByOrdersArgs } from "./args/GroupByOrdersArgs";
import { OrdersGroupBy } from "../../outputs/OrdersGroupBy";
export declare class GroupByOrdersResolver {
    groupByOrders(ctx: any, info: GraphQLResolveInfo, args: GroupByOrdersArgs): Promise<OrdersGroupBy[]>;
}
