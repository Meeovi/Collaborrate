import { GraphQLResolveInfo } from "graphql";
import { DeleteWarehouseArgs } from "./args/DeleteWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class DeleteWarehouseResolver {
    deleteWarehouse(ctx: any, info: GraphQLResolveInfo, args: DeleteWarehouseArgs): Promise<Warehouse | null>;
}
