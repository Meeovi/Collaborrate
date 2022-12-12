import { ManufacturerOrderByWithAggregationInput } from "../../../inputs/ManufacturerOrderByWithAggregationInput";
import { ManufacturerScalarWhereWithAggregatesInput } from "../../../inputs/ManufacturerScalarWhereWithAggregatesInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
export declare class GroupByManufacturerArgs {
    where?: ManufacturerWhereInput | undefined;
    orderBy?: ManufacturerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media" | "products">;
    having?: ManufacturerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
