import { WarehouseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WarehouseOrderByWithRelationAndSearchRelevanceInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
export declare class FindManyWarehouseArgs {
    where?: WarehouseWhereInput | undefined;
    orderBy?: WarehouseOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WarehouseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "city" | "state" | "country" | "postal" | "status" | "image" | "products" | "category" | "isPublic"> | undefined;
}
