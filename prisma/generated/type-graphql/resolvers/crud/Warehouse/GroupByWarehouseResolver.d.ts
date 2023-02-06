import { GraphQLResolveInfo } from "graphql";
import { GroupByWarehouseArgs } from "./args/GroupByWarehouseArgs";
import { WarehouseGroupBy } from "../../outputs/WarehouseGroupBy";
export declare class GroupByWarehouseResolver {
    groupByWarehouse(ctx: any, info: GraphQLResolveInfo, args: GroupByWarehouseArgs): Promise<WarehouseGroupBy[]>;
}
