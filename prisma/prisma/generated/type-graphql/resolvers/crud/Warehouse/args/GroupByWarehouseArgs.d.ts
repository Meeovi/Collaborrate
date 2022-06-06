import { WarehouseOrderByWithAggregationInput } from "../../../inputs/WarehouseOrderByWithAggregationInput";
import { WarehouseScalarWhereWithAggregatesInput } from "../../../inputs/WarehouseScalarWhereWithAggregatesInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
export declare class GroupByWarehouseArgs {
    where?: WarehouseWhereInput | undefined;
    orderBy?: WarehouseOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "description" | "city" | "state" | "country" | "postal" | "status" | "image" | "public" | "products" | "category">;
    having?: WarehouseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
