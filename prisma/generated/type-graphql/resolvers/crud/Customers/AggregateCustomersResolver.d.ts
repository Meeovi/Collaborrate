import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomersArgs } from "./args/AggregateCustomersArgs";
import { AggregateCustomers } from "../../outputs/AggregateCustomers";
export declare class AggregateCustomersResolver {
    aggregateCustomers(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomersArgs): Promise<AggregateCustomers>;
}
