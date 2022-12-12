import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWarehouseArgs } from "./args/DeleteOneWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class DeleteOneWarehouseResolver {
    deleteOneWarehouse(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWarehouseArgs): Promise<Warehouse | null>;
}
