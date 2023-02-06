import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWarehouseArgs } from "./args/UpsertOneWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class UpsertOneWarehouseResolver {
    upsertOneWarehouse(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWarehouseArgs): Promise<Warehouse>;
}
