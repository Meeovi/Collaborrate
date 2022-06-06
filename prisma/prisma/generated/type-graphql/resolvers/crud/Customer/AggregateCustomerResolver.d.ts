import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerArgs } from "./args/AggregateCustomerArgs";
import { AggregateCustomer } from "../../outputs/AggregateCustomer";
export declare class AggregateCustomerResolver {
    aggregateCustomer(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomerArgs): Promise<AggregateCustomer>;
}
