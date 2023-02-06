import { GraphQLResolveInfo } from "graphql";
import { UpdateOneWarehouseArgs } from "./args/UpdateOneWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class UpdateOneWarehouseResolver {
    updateOneWarehouse(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWarehouseArgs): Promise<Warehouse | null>;
}
