import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWarehouseOrThrowArgs } from "./args/FindUniqueWarehouseOrThrowArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class FindUniqueWarehouseOrThrowResolver {
    getWarehouse(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWarehouseOrThrowArgs): Promise<Warehouse | null>;
}
