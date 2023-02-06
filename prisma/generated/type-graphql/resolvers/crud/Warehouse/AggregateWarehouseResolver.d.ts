import { GraphQLResolveInfo } from "graphql";
import { AggregateWarehouseArgs } from "./args/AggregateWarehouseArgs";
import { AggregateWarehouse } from "../../outputs/AggregateWarehouse";
export declare class AggregateWarehouseResolver {
    aggregateWarehouse(ctx: any, info: GraphQLResolveInfo, args: AggregateWarehouseArgs): Promise<AggregateWarehouse>;
}
