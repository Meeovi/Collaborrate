import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWarehouseArgs } from "./args/FindUniqueWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
export declare class FindUniqueWarehouseResolver {
    warehouse(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWarehouseArgs): Promise<Warehouse | null>;
}
