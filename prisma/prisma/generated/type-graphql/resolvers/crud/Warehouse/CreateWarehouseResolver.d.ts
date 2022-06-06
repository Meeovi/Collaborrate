import { GraphQLResolveInfo } from "graphql";
import { CreateWarehouseArgs } from "./args/CreateWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class CreateWarehouseResolver {
    createWarehouse(ctx: any, info: GraphQLResolveInfo, args: CreateWarehouseArgs): Promise<Warehouse>;
}
