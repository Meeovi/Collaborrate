import { GraphQLResolveInfo } from "graphql";
import { UpsertWarehouseArgs } from "./args/UpsertWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class UpsertWarehouseResolver {
    upsertWarehouse(ctx: any, info: GraphQLResolveInfo, args: UpsertWarehouseArgs): Promise<Warehouse>;
}
