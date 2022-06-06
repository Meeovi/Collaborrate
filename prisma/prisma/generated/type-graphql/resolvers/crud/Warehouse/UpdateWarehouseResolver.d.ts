import { GraphQLResolveInfo } from "graphql";
import { UpdateWarehouseArgs } from "./args/UpdateWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class UpdateWarehouseResolver {
    updateWarehouse(ctx: any, info: GraphQLResolveInfo, args: UpdateWarehouseArgs): Promise<Warehouse | null>;
}
