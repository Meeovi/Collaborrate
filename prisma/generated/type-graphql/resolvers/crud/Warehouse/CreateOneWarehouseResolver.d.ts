import { GraphQLResolveInfo } from "graphql";
import { CreateOneWarehouseArgs } from "./args/CreateOneWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class CreateOneWarehouseResolver {
    createOneWarehouse(ctx: any, info: GraphQLResolveInfo, args: CreateOneWarehouseArgs): Promise<Warehouse>;
}
