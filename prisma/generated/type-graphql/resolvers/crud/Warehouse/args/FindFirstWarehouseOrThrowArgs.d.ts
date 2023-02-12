import { WarehouseOrderByWithRelationInput } from "../../../inputs/WarehouseOrderByWithRelationInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
export declare class FindFirstWarehouseOrThrowArgs {
    where?: WarehouseWhereInput | undefined;
    orderBy?: WarehouseOrderByWithRelationInput[] | undefined;
    cursor?: WarehouseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "city" | "state" | "country" | "postal" | "status" | "image" | "products" | "category" | "isPublic"> | undefined;
}
