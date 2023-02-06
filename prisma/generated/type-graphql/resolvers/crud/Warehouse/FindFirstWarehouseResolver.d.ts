import { GraphQLResolveInfo } from "graphql";
import { FindFirstWarehouseArgs } from "./args/FindFirstWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class FindFirstWarehouseResolver {
    findFirstWarehouse(ctx: any, info: GraphQLResolveInfo, args: FindFirstWarehouseArgs): Promise<Warehouse | null>;
}
