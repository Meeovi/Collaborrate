import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomer_groupArgs } from "./args/AggregateCustomer_groupArgs";
import { AggregateCustomer_group } from "../../outputs/AggregateCustomer_group";
export declare class AggregateCustomer_groupResolver {
    aggregateCustomer_group(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomer_groupArgs): Promise<AggregateCustomer_group>;
}
