import { GraphQLResolveInfo } from "graphql";
import { AggregateOrdersArgs } from "./args/AggregateOrdersArgs";
import { AggregateOrders } from "../../outputs/AggregateOrders";
export declare class AggregateOrdersResolver {
    aggregateOrders(ctx: any, info: GraphQLResolveInfo, args: AggregateOrdersArgs): Promise<AggregateOrders>;
}
