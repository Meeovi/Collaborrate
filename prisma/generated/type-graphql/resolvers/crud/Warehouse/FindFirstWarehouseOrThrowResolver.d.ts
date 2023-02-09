import { GraphQLResolveInfo } from "graphql";
import { FindFirstWarehouseOrThrowArgs } from "./args/FindFirstWarehouseOrThrowArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class FindFirstWarehouseOrThrowResolver {
    findFirstWarehouseOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWarehouseOrThrowArgs): Promise<Warehouse | null>;
}
