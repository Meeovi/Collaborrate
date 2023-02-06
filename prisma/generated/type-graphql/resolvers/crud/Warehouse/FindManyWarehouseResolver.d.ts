import { GraphQLResolveInfo } from "graphql";
import { FindManyWarehouseArgs } from "./args/FindManyWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class FindManyWarehouseResolver {
    warehouses(ctx: any, info: GraphQLResolveInfo, args: FindManyWarehouseArgs): Promise<Warehouse[]>;
}
